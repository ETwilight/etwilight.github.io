import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  GeoJSON,
} from "react-leaflet";
import L from "leaflet";
import { useEffect, useMemo } from "react";
import "leaflet/dist/leaflet.css";

import { transformGCJ02ToWGS84 } from "@isvend/coord-transform";
import * as turf from "@turf/turf";

import concertHallData from "@/assets/music/concertHall.json";
import regionGeoData from "@/assets/map/ne_10m_admin_1_states_provinces.json";
import type { FeatureCollection, Feature, Polygon, MultiPolygon } from "geojson";

type ConcertHall = {
  name: string;
  gcjLat: number;
  gcjLng: number;
  imageUrl: string;
  ensembles: string[];
};

const concertHalls = concertHallData as ConcertHall[];
const regions = regionGeoData as FeatureCollection;

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

// 色系调和的深蓝色调色板
const blueShades = [
  "#1e3a8a", // blue-800
  "#2c5282", // blue-700
  "#2b6cb0", // blue-600
  "#3182ce", // blue-500
  "#4299e1", // blue-400
];

function FitMapToAllMarkers() {
  const map = useMap();

  useEffect(() => {
    const bounds = L.latLngBounds(
      concertHalls.map((hall) => {
        const [lng, lat] = transformGCJ02ToWGS84(hall.gcjLng, hall.gcjLat);
        return [lat, lng] as [number, number];
      })
    );

    setTimeout(() => {
      map.fitBounds(bounds, { padding: [40, 40] });
    }, 0);
  }, [map]);

  return null;
}

export default function ConcertMap() {
  const { heardRegions, heardRegionCollection } = useMemo(() => {
    const visited = new Set<string>();
    const matched: Feature<Polygon | MultiPolygon>[] = [];

    for (const hall of concertHalls) {
      const [lng, lat] = transformGCJ02ToWGS84(hall.gcjLng, hall.gcjLat);
      const point = turf.point([lng, lat]);

      for (const feature of regions.features) {
        if (
          (feature.geometry.type === "Polygon" ||
            feature.geometry.type === "MultiPolygon") &&
          turf.booleanPointInPolygon(
            point,
            feature as Feature<Polygon | MultiPolygon>
          )
        ) {
          const id =
            feature.properties?.name ||
            feature.properties?.postal ||
            JSON.stringify(feature.geometry);
          if (!visited.has(id)) {
            visited.add(id);
            matched.push(feature as Feature<Polygon | MultiPolygon>);
          }
          break;
        }
      }
    }

    return {
      heardRegions: matched,
      heardRegionCollection: {
        type: "FeatureCollection",
        features: matched,
      } satisfies FeatureCollection<Polygon | MultiPolygon>,
    };
  }, []);

  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <FitMapToAllMarkers />

      {/* 渲染染色区域 */}
      <GeoJSON
        data={heardRegionCollection}
        style={(feature) => {
          if (!feature) return {};

          const index = heardRegions.findIndex((f) => f === feature);
          const color = blueShades[index % blueShades.length];

          return {
            fillColor: color,
            fillOpacity: 0.6,
            color: color,
            weight: 1,
            opacity: 1,
          };
        }}
      />

      {/* 渲染音乐厅标记 */}
      {concertHalls.map((hall, index) => {
        const [lng, lat] = transformGCJ02ToWGS84(hall.gcjLng, hall.gcjLat);

        return (
          <Marker key={index} position={[lat, lng]} icon={markerIcon}>
            <Popup>
              <div style={{ width: "200px" }}>
                <img
                  src={hall.imageUrl}
                  alt={hall.name}
                  style={{ width: "100%", borderRadius: "0.25rem" }}
                />
                <div style={{ marginTop: "0.5rem", fontWeight: "bold" }}>
                  {hall.name}
                </div>
                <ul style={{ paddingLeft: "1rem", marginTop: "0.5rem" }}>
                  {hall.ensembles.map((ensemble, i) => (
                    <li key={i}>• {ensemble}</li>
                  ))}
                </ul>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

import {
  transformGCJ02ToWGS84,
} from "@isvend/coord-transform";

import concertHallData from "@/assets/music/concertHall.json";

type ConcertHall = {
  name: string;
  gcjLat: number;
  gcjLng: number;
  imageUrl: string;
  ensembles: string[];
};

const concertHalls = concertHallData as ConcertHall[];

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

function FitMapToAllMarkers() {
  const map = useMap();

  useEffect(() => {
    const bounds = L.latLngBounds(
      concertHalls.map((hall) => {
        const [lng, lat] = transformGCJ02ToWGS84(hall.gcjLng, hall.gcjLat);
        return [lat, lng] as [number, number];
      })
    );
    map.fitBounds(bounds, { padding: [40, 40] });
  }, [map]);

  return null;
}

export default function ConcertMap() {
  return (
    <MapContainer
      center={[0, 0]} // 会被 FitMapToAllMarkers 覆盖
      zoom={2}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <FitMapToAllMarkers />

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
                <div style={{ marginTop: "0.5rem", fontWeight: "bold" }}>{hall.name}</div>
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

import { lazy, Suspense } from 'react';

// Dynamically import the ConcertMap to avoid SSR issues with Leaflet
const ConcertMap = lazy(() => import('./ConcertMap'));

export default function ConcertMapWrapper() {
  return (
    <Suspense fallback={
      <div style={{ 
        width: "100%", 
        height: "100%", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        backgroundColor: "#f0f0f0",
        borderRadius: "0.75rem"
      }}>
        Loading map...
      </div>
    }>
      <ConcertMap />
    </Suspense>
  );
}
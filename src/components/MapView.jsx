import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapView({ latitude, longitude, name }) {
  if (!latitude || !longitude) {
    return (
      <p>
        Location coordinates are not available for this heritage site.
      </p>
    );
  }

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={15}
      scrollWheelZoom={false}
      style={{
        height: "400px",
        width: "100%",
        borderRadius: "14px",
      }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[latitude, longitude]}>
        <Popup>
          <strong>{name}</strong>
          <br />
          BharatVerse Heritage Location
        </Popup>
      </Marker>
    </MapContainer>
  );
}
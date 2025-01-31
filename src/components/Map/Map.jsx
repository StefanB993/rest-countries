import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "./Map.module.scss";

function Map({ position }) {
  return (
    <div className={styles.mapContainer}>
      <MapContainer center={position} zoom={6} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;

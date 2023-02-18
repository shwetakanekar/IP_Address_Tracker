import React from 'react';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import markerIcon from '/marker-icon.png';
import markerShadow from '/marker-shadow.png';
import markerRetina from '/marker-icon-2x.png';

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: markerRetina,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapComponent = () => {
  const containerStyle = {
    width: '100%',
    height: 'calc(100vh - 240px)',
  };

  const position = [51.505, -0.09];

  return (
    <MapContainer
      center={position}
      zoom={20}
      scrollWheelZoom={false}
      style={containerStyle}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Hi</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;

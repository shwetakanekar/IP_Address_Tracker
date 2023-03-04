import React, { useEffect, useState } from 'react';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import markerIcon from '/marker-icon.png';
import markerShadow from '/marker-shadow.png';
import markerRetina from '/marker-icon-2x.png';

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: markerRetina,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function MyComponent(props) {
  const map = useMap();
  map.setView(props.center);
  return null;
}

const MapComponent = ({ ipAddress }) => {
  const [position, setPosition] = useState([51.505, -0.09]);

  const getPosition = (ipAddress) => {
    console.log('getPosition ', ipAddress);
    // call API to get the new position
    setPosition((prevState) => [prevState[0] + 0.001, prevState[1] + 0.00001]);
    console.log('getPosition ', position);
  };

  useEffect(() => {
    getPosition(ipAddress);
  }, [ipAddress]);

  const containerStyle = {
    width: '100%',
    height: 'calc(100vh - 260px)',
    minHeight: '500px',
  };

  return (
    <MapContainer
      center={position}
      zoom={20}
      scrollWheelZoom={false}
      style={containerStyle}
      zoomControl={false}
    >
      <MyComponent center={position} />
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

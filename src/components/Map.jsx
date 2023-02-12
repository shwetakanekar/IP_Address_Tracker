import React, { useRef, useState } from 'react';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import markerIcon from '/marker-icon.png';
import markerShadow from '/marker-shadow.png';
import markerRetina from '/marker-icon-2x.png';

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: markerRetina,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapComponent = () => {
  const mapRef = useRef();
  const zoom = 16;
  const containerStyle = {
    width: '100%',
    height: 'calc(100vh - 240px)',
  };
  const center = {
    lat: 28.626137,
    lng: 79.821603,
  };
  const initialMarkers = [
    {
      position: {
        lat: 28.625485,
        lng: 79.821091,
      },
      draggable: false,
    },
  ];

  const [markers, setMarkers] = useState(initialMarkers);

  //   const mapClicked = async (event) => {
  //     console.log(event.latlng.lat, event.latlng.lng);
  //   };

  //   const markerClicked = (marker, index) => {
  //     console.log(marker.position.lat, marker.position.lng);
  //   };

  //   const markerDragEnd = (event, index) => {
  //     console.log(event.lat, event.lng);
  //   };

  return (
    <MapContainer
      style={containerStyle}
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <MapContent /> */}
      {markers.map((marker, index) => (
        <MarkerContent
          key={index}
          position={marker.position}
          draggable={marker.draggable}
        />
      ))}
    </MapContainer>
  );
};

// const MapContent = ({ onClick }) => {
//   const map = useMapEvents({
//     click: (event) => onClick(event),
//   });
//   return null;
// };

const MarkerContent = (props) => {
  const markerRef = useRef();
  const { position, draggable } = props;

  return (
    <Marker position={position} draggable={draggable} ref={markerRef}>
      <Popup>
        <b>
          {position.lat}, {position.lng}
        </b>
      </Popup>
    </Marker>
  );
};

export default MapComponent;

import { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import MapComponent from './components/Map';
import axios from 'axios';

function App() {
  const [ipAddress, setIpAddress] = useState('8.8.8.8');
  const [position, setPosition] = useState([37.40599, -122.078514]);
  const [data, setData] = useState({
    ip: '8.8.8.8',
    location: {
      country: 'US',
      region: 'California',
      city: 'Mountain View',
      lat: 37.40599,
      lng: -122.078514,
      postalCode: '94043',
      timezone: '-07:00',
      geonameId: 5375481,
    },
    domains: [
      '0d2.net',
      '003725.com',
      '0f6.b0094c.cn',
      '007515.com',
      '0guhi.jocose.cn',
    ],
    as: {
      asn: 15169,
      name: 'Google LLC',
      route: '8.8.8.0/24',
      domain: 'https://about.google/intl/en/',
      type: 'Content',
    },
    isp: 'Google LLC',
  });

  const handleIpChange = (event) => {
    event.preventDefault();
    setIpAddress(event.target['ipAddress'].value);
  };

  useEffect(() => {
    document.getElementById('ipAddress').value = '';
    getPosition(ipAddress);
  }, [ipAddress]);

  const getPosition = (ipAddress) => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_QvijfGgMIVrFJU7xSZckoUHFnaOEM&ipAddress=${ipAddress}`
      )
      .then((response) => {
        setData(response.data);
        setPosition([response.data.location.lat, response.data.location.lng]);
      })
      .catch((error) => {
        console.log('Error: ', error);
        alert(`Invalid IP address - ${ipAddress}`);
      });
  };

  return (
    <div>
      <Dashboard handleIpChange={handleIpChange} data={data} />
      <MapComponent position={position} />
    </div>
  );
}

export default App;

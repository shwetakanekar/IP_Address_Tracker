import { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import MapComponent from './components/Map';

function App() {
  const [ipAddress, setIpAddress] = useState('192.212.174.101');
  const [position, setPosition] = useState([51.505, -0.09]);

  const handleIpChange = (event) => {
    event.preventDefault();
    setIpAddress(event.target['ipAddress'].value);
  };

  useEffect(() => {
    getPosition(ipAddress);
  }, [ipAddress]);

  const getPosition = (ipAddress) => {
    console.log('getPosition ', ipAddress);
    // call API to get the new position
    // const response = {
    //   ip: '8.8.8.8',
    //   location: {
    //     country: 'US',
    //     region: 'California',
    //     city: 'Mountain View',
    //     lat: 37.40599,
    //     lng: -122.078514,
    //     postalCode: '94043',
    //     timezone: '-07:00',
    //     geonameId: 5375481,
    //   },
    //   domains: [
    //     '0d2.net',
    //     '003725.com',
    //     '0f6.b0094c.cn',
    //     '007515.com',
    //     '0guhi.jocose.cn',
    //   ],
    //   as: {
    //     asn: 15169,
    //     name: 'Google LLC',
    //     route: '8.8.8.0/24',
    //     domain: 'https://about.google/intl/en/',
    //     type: 'Content',
    //   },
    //   isp: 'Google LLC',
    // };
    // console.log(response);
    // setPosition([response.location.lat, response.location.lng]);
    setPosition((prevState) => [prevState[0] + 0.001, prevState[1] + 0.00001]);
    console.log('getPosition ', position);
  };

  return (
    <div>
      <Dashboard handleIpChange={handleIpChange} />
      <MapComponent position={position} />
    </div>
  );
}

export default App;

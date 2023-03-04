import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import MapComponent from './components/Map';

function App() {
  const [ipAddress, setIpAddress] = useState('192.212.174.101');

  const handleIpChange = (event) => {
    event.preventDefault();
    setIpAddress(event.target['ipAddress'].value);
  };

  return (
    <div>
      <Dashboard handleIpChange={handleIpChange} />
      <MapComponent ipAddress={ipAddress} />
    </div>
  );
}

export default App;

import React from 'react';

const Dashboard = ({ handleIpChange }) => {
  return (
    <div className="dashboard">
      <h1 className="header">IP Address Tracker</h1>
      <form onSubmit={(e) => handleIpChange(e)}>
        <input
          type="text"
          name="ipAddress"
          id="ipAddress"
          placeholder="Search for any IP address or domain"
        />
        <button type="submit">
          <img src="/icon-arrow.svg" alt="Arrow icon" />
        </button>
      </form>

      <div className="outputBox">
        <div>
          <div className="outputHeader">IP ADDRESS</div>
          <div className="outputValue">192.212.174.101</div>
        </div>
        <div>
          <div className="outputHeader">LOCATION</div>
          <div className="outputValue">Brooklyn, NY 10001</div>
        </div>
        <div>
          <div className="outputHeader">TIMEZONE</div>
          <div className="outputValue">UTC -05:00</div>
        </div>
        <div>
          <div className="outputHeader">ISP</div>
          <div className="outputValue">SpaceX Starlink</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

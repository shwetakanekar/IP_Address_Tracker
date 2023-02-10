import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="header">IP Address Tracker</h1>
      <form>
        <input
          type="text"
          name="ipAddress"
          id="ipAddress"
          placeholder="Search for any IP address or domain"
        />
        <button type="submit">
          <img src="/public/icon-arrow.svg" alt="Arrow icon" />
        </button>
      </form>
    </div>
  );
};

export default Dashboard;

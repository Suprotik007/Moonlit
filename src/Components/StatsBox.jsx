import React from 'react';

const StatsBox = () => {
    return (
        <div>
            <div className="stats  lg:stats-horizontal border-2 border-gray-600">
  <div className="stat ">
    <div className="stat-title text-gray-700">Total Visits</div>
    <div className="stat-value text-gray-700">31K</div>
    <div className="stat-desc text-gray-700">2024 - 2025</div>
  </div>

  <div className="stat">
    <div className="stat-title text-gray-700">Total Clients</div>
    <div className="stat-value text-gray-700">4,211</div>
    <div className="stat-desc text-gray-700">↗︎ 400 (22%)</div>
  </div>

  <div className="stat">
    <div className="stat-title text-gray-700">New Bookings</div>
    <div className="stat-value text-gray-700">789</div>
    <div className="stat-desc text-gray-700">2024-2025</div>
  </div>
</div>
        </div>
    );
};

export default StatsBox;
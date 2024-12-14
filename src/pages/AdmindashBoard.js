import React, { useState } from "react";
import "./pagecss/AdminDashboard.css";
import { Link } from "react-router-dom";

const busData = [
  {
    id: 1,
    routeName: "annandnagar",
    totalBuses: 3,
    status: "green",
  },
  {
    id: 2,
    routeName: "prabhat",
    totalBuses: 2,
    status: "orange",
  },
  {
    id: 3,
    routeName: "piplani",
    totalBuses: 4,
    status: "green",
  },
  {
    id: 4,
    routeName: "ayodhya",
    totalBuses: 6,
    status: "red",
  },
  {
    id: 5,
    routeName: "prabhatam",
    totalBuses: 4,
    status: "orange",
  },
  {
    id: 6,
    routeName: "patel nagar",
    totalBuses: 4,
    status: "red",
  },
];

const AdminDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBuses = busData.filter((bus) =>
    bus.routeName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <div className="management-panel">
        <h2 className="panel-title">Bus Management</h2>

        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search by Route Name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Bus List */}
        <ul className="bus-list">
          {filteredBuses.length > 0 ? (
            filteredBuses.map((bus) => (
              <li key={bus.id} className="bus-item">
                <div className="bus-details">
                  <p>
                    <strong>Route:</strong> {bus.routeName}
                  </p>
                  <p>
                    <strong>Total Buses:</strong> {bus.totalBuses}
                  </p>
                </div>
                <div className="status-and-action">
                  <div className={`status-circle ${bus.status}`}></div>
                  <button className="manage-button">
                    <Link to="/Manage">Manage</Link>
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p className="no-results">
              No buses found for the given route name.
            </p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;

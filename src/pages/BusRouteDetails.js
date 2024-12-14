import React, { useEffect, useState } from "react";
import "./pagecss/BusRouteDetails.css"; // Optional: custom CSS for elegant styling

const BusRouteDetails = () => {
  const [routeInfo, setRouteInfo] = useState(null); // Store selected route details

  // Route data (static, no map)
  const routeData = {
    "anand-nagar": {
      name: "LNCT to Anand Nagar",
      pickupTime: "10:00 AM",
      dropTime: "05:00 PM",
      busNumber: "MP 04 1989",
      stops: ["LNCT College", "Anand Nagar"],
    },
    indrapuri: {
      name: "LNCT to Indrapuri",
      pickupTime: "8:15 AM",
      dropTime: "5:45 PM",
      busNumber: "MP 04 1989",
      stops: ["LNCT College", "Indrapuri"],
    },
  };

  // Get route from URL and set selected route details
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedRoute = urlParams.get("route");

    if (selectedRoute && routeData[selectedRoute]) {
      setRouteInfo(routeData[selectedRoute]);
    }
  }, []);

  if (!routeInfo) {
    return <p>Loading route details...</p>;
  }

  return (
    <div className="route-details-container">
      <header className="route-header">
        <h1>{routeInfo.name}</h1>
        <p className="bus-number">Bus Number: {routeInfo.busNumber}</p>
      </header>

      <div className="route-info">
        <div className="route-time">
          <p>
            <strong>Pickup Time:</strong> {routeInfo.pickupTime}
          </p>
          <p>
            <strong>Drop Time:</strong> {routeInfo.dropTime}
          </p>
        </div>

        <div className="bus-stops">
          <h3>Bus Stops:</h3>
          <ul>
            {routeInfo.stops.map((stop, index) => (
              <li key={index}>{stop}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BusRouteDetails;

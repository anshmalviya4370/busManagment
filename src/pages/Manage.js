import React, { useState } from "react";
import "./pagecss/RouteDetailsPanel.css";

const initialBuses = [
  { id: 1, busNumber: "MH12AB1234", routeName: "Route 1", driver: "driver1" },
  { id: 2, busNumber: "MH12XY5678", routeName: null, driver: "driver2" },
  { id: 3, busNumber: "MH12CD9012", routeName: null, driver: "driver3" },
  { id: 4, busNumber: "MH12EF3456", routeName: null, driver: "driver4" },
  { id: 5, busNumber: "MH12GH7890", routeName: null, driver: "driver5" },
];

const Manage = () => {
  let routeName = "annadnagar";
  const [buses, setBuses] = useState(initialBuses);

  // Get buses assigned to this route
  const assignedBuses = buses.filter((bus) => bus.routeName === routeName);

  // Get unassigned buses
  const unassignedBuses = buses.filter((bus) => !bus.routeName);

  // Assign the top unassigned bus to the route
  const assignTopUnassignedBus = () => {
    if (unassignedBuses.length > 0) {
      const topBus = unassignedBuses[0]; // Get the top unassigned bus
      setBuses((prevBuses) =>
        prevBuses.map((bus) =>
          bus.id === topBus.id ? { ...bus, routeName: routeName } : bus
        )
      );
    }
  };

  // Remove a bus from the route
  const removeBus = (busId) => {
    setBuses((prevBuses) =>
      prevBuses.map((bus) =>
        bus.id === busId ? { ...bus, routeName: null } : bus
      )
    );
  };
  React.useEffect(() => {
    console.log("Updated Buses State:", buses);
  }, [buses]);

  return (
    <div className="route-panel-container">
      {/* Display Route Name */}
      <h1 className="route-name">{routeName}</h1>

      {/* Assigned Buses */}
      <div className="assigned-buses">
        <h2>Assigned Buses</h2>
        {assignedBuses.length > 0 ? (
          <ul className="bus-list">
            {assignedBuses.map((bus) => (
              <li key={bus.id} className="bus-item">
                <p>
                  <strong>Bus Number:</strong> {bus.busNumber}
                </p>
                <p>
                  <strong>Driver name:</strong> {bus.driver}
                </p>
                <button
                  className="remove-button"
                  onClick={() => removeBus(bus.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No buses assigned to this route.</p>
        )}
      </div>

      {/* Assign Buses */}
      <div className="assign-bus-section">
        <h2>Assign Buses</h2>
        {unassignedBuses.length > 0 ? (
          <button className="assign-button" onClick={assignTopUnassignedBus}>
            Assign Top Unassigned Bus
          </button>
        ) : (
          <p>No unassigned buses available.</p>
        )}
      </div>
    </div>
  );
};

export default Manage;

import React, { useState, useEffect } from "react";
import "./pagecss/BusDetails.css"; // Import the CSS for styling
import { fetchData } from "../component/fetchData/FetchData";

const BusDetails = ({ busData }) => {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  useEffect(() => {
    const getBuses = async () => {
      try {
        const data = await fetchData();

        // Check if 'buses' exists and is an array
        if (data && Array.isArray(data.record.buses)) {
          setBuses(data.record.buses[0]);
          setLoading(false); // Data is loaded, set loading to false
        } else {
          setError("Invalid bus data");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching bus data");
        setLoading(false);
      }
    };

    getBuses();
  }, []);

  if (loading) {
    return <p>Loading bus details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  console.log(buses);
  return (
    <div className="bus-details-container">
      <h1 className="title">Bus Details</h1>
      <ul className="bus-list">
        {buses.map((bus) => (
          <li key={`${bus.id}-${bus.name}`} className="bus-item">
            {" "}
            {/* Use a combination of id and name for unique key */}
            <span className="bus-number">Bus Number: {bus.name}</span>
            <span className="bus-status">
              Status: {bus.status === "assigned" ? "Assigned" : "Not Assigned"}
            </span>
            {bus.status === "assigned" && bus.routeId && (
              <span className="bus-route">Route Name: {bus.routeId}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusDetails;

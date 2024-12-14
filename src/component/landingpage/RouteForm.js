import { Link } from "react-router-dom";
import { useState } from "react";

const BusRouteForm = () => {
  const [selectedRoute, setSelectedRoute] = useState("");

  const handleRouteChange = (event) => {
    setSelectedRoute(event.target.value);
  };

  return (
    <form>
      <label htmlFor="route">Choose Route:</label>
      <select
        id="route"
        name="route"
        value={selectedRoute}
        onChange={handleRouteChange}
        required
      >
        <option value="">-- Select Route --</option>
        <option value="anandnagar">LNCT to Anand Nagar</option>
        <option value="indrapuri">LNCT to Indrapuri</option>
      </select>
      <br />
      {selectedRoute && (
        <Link to={`/bus-route?route=${selectedRoute}`}>
          <button type="button">View Route</button>
        </Link>
      )}
    </form>
  );
};

export default BusRouteForm;

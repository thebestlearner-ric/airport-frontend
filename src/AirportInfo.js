import React, { useState } from 'react';

function AirportInfo() {
  const [icaoCode, setIcaoCode] = useState('');
  const [airportInfo, setAirportInfo] = useState(null);
  const [jsonString, setJsonString] = useState('');
  const handleInputChange = (e) => {
    setIcaoCode(e.target.value);
  };

  const getAirportInfo = async () => {
    // const response = await fetch(`http://backend-service.air.svc.cluster.local:5000/all_airports`);
    const response = await fetch(`/all_airports`);
    const data = await response.json();
    setAirportInfo(data);
    setJsonString(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <h2>Get Airport Information</h2>
      <div>
        <label>
          ICAO Code:
          <input
            type="text"
            value={icaoCode}
            onChange={handleInputChange}
          />
        </label>
        <button onClick={getAirportInfo}>Get Info</button>
      </div>
      {airportInfo && (
        <div>
          <h3>Airport Information</h3>
          <p>Name: {airportInfo.name}</p>
          <p>City: {airportInfo.city}</p>
          <p>Country: {airportInfo.country}</p>
        </div>
      )}
      {jsonString && (
        <div>
          <h3>JSON String</h3>
          <pre>{jsonString}</pre>
        </div>
      )}
    </div>
  );
}

export default AirportInfo;
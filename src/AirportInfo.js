import React, { useState } from 'react';
import { API_BASE_URL } from './constants';

function AirportInfo() {
  const [icaoCode, setIcaoCode] = useState('');
  const [airportInfo, setAirportInfo] = useState(null);
  const [jsonString, setJsonString] = useState('');
  const handleInputChange = (e) => {
    setIcaoCode(e.target.value);
  };

  const getAllAirportInfo = async () => {
    const response = await fetch(`${API_BASE_URL}/all_airports`);
    const data = await response.json();
    setAirportInfo(data);
    setJsonString(JSON.stringify(data, null, 2));
  };
  const getSidsAirportInfo = async () => {
    const response = await fetch(`${API_BASE_URL}/sids/airport/${icaoCode}`);
    const data = await response.json();
    setAirportInfo(data);
    setJsonString(JSON.stringify(data, null, 2));
  };
  const getStarsAirportInfo = async () => {
    const response = await fetch(`${API_BASE_URL}/stars/airport/${icaoCode}`);
    const data = await response.json();
    setAirportInfo(data);
    setJsonString(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <h2>Get Airport Information</h2>
      <div>
        <label>
          Get Specific Airports Info:
          <input
            type="text"
            value={icaoCode}
            onChange={handleInputChange}
          />
        </label>
        <button onClick={getSidsAirportInfo}>Get Sids Info</button>
        <button onClick={getStarsAirportInfo}>Get Stars Info</button>
      </div>
      {airportInfo && (
        <div>
          <h3>Airport Information</h3>
          <p>Name: {airportInfo.name}</p>
          <p>City: {airportInfo.uid}</p>
          <p>Country: {airportInfo.icao}</p>
        </div>
      )}
      <div>
        <h2>Get All Airport Info</h2>
        <label>
          Get All Airports Info:
        </label>
        <button onClick={getAllAirportInfo}>Get All Info</button>
      </div>
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
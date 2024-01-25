import React, { useState } from "react";

export default function GeolocationComponent() {
  const [location, setLocation] = useState(null);

  async function getGeolocation() {
    // ... (as above)
    setLocation(data);
  }

  return (
    <div>
      <button onClick={getGeolocation}>Get Location</button>
      {location && (
        <p>
          Latitude: {location.lat}, Longitude: {location.lng}
        </p>
      )}
    </div>
  );
}

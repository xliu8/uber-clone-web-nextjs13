// pages/api/geolocate.js
import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await fetch("/api/geolocate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Include any additional data in the body, if needed
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    setCenter({
      lat: data.location.lat,
      lng: data.location.lng,
    });
  } catch (error) {
    console.error("Failed to fetch geolocation", error);
  }
}

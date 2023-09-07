"use client";
import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import the Leaflet CSS
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationIconMarker from "./icons8-location-50.png";
import { useSelector } from "react-redux";
const customIcon = L.icon({
  iconUrl: "../../assets/paw.png",
  iconSize: [25, 25],
  iconAnchor: [16, 32],
});

const sampleData = [
  { id: 1, lat: 51.502, lng: -0.09 },
  { id: 2, lat: 51.505, lng: -0.08 },
  { id: 3, lat: 51.508, lng: -0.07 },
];

const Map = () => {
  const [locations, setLocations] = useState([]);
  const animals = useSelector((state) => state.animalsData.animalsData);
  useEffect(() => {
    // Fetch data from your API here and set it in the state
    // For now, using sampleData as a placeholder

    setLocations(animals);
  }, []);

  useEffect(() => {
    if (locations.length === 0) {
      // No locations, return early to avoid creating the map
      return;
    }
    // Create the map inside the useEffect hook
    var map = L.map("map", {
      scrollWheelZoom: true,
    }).setView([31.526, 74.453], 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // Iterate through the locations and create markers for each one
    locations.forEach((location) => {
      L.marker([location.latitude, location.longitude], {
        icon: customIcon,
      }).addTo(map);
    });
  }, [locations]);

  return (
    <>
      <h3>Map</h3>
      <div id="map" style={{ height: "450px" }}></div>
    </>
  );
};

export default Map;

"use client";
import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import the Leaflet CSS

import { useSelector } from "react-redux";
const customIcon = L.icon({
  iconUrl: "../../assets/pawLocation.png",
  iconSize: [25, 25],
  iconAnchor: [16, 32],
});

const clinicIcon = L.icon({
  iconUrl: "../../assets/pawClinic.png",
  iconSize: [25, 25],
  iconAnchor: [16, 32],
});

const Map = () => {
  const [locations, setLocations] = useState([]);
  const [clinicLocations, setClinicLocations] = useState([]);
  const [animalLocations, setAnimalLocations] = useState([]);

  const allClinicsData = JSON.parse(localStorage.getItem("allClinics"));
  const allAnimalsData = JSON.parse(localStorage.getItem("allAnimalsCases"));

  console.log("localStorage allAnimalsData", allAnimalsData);
  console.log("localStorage allClinicsData", allClinicsData);

  // const selectedClinicByUser = JSON.parse(
  //   localStorage.getItem("SELECTED_CLINIC_BY_USER")
  // );

  const abc = JSON.parse(localStorage.getItem("SELECTED_CLINIC_BY_USER"));
  console.log("ABC=", abc);
  console.log("selectedClinicByUser", selectedClinicByUser);

  useEffect(() => {
    console.log("useEffect 1");
    // Fetch data from your API here and set it in the state
    // For now, using sampleData as a placeholder
    if (selectedClinicByUser) {
      setLocations(selectedClinicByUser);
    }
    if (allAnimalsData) {
      setAnimalLocations(allAnimalsData);
    }
    if (allClinicsData) {
      setClinicLocations(allClinicsData);
    }
  }, []);

  useEffect(() => {
    console.log("useEffect 2");
    if (1 === 0) {
      // No locations, return early to avoid creating the map
      return;
    }

    var map = L.map("map", {
      scrollWheelZoom: true,
    }).setView([33.526, 74.453], 6);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    clinicLocations?.forEach((clinic) => {
      console.log("clinicLocations: ", clinic);
      L.marker([clinic.longitude, clinic.latitude], {
        icon: customIcon,
      }).addTo(map);
    });

    animalLocations?.forEach((animal) => {
      console.log("animalLocations: ", animal);
      L.marker([animal.longitude, animal.latitude], {
        icon: clinicIcon,
      }).addTo(map);
    });
  }, [locations, clinicLocations, animalLocations]);

  return (
    <>
      <h3>Map</h3>
      <div id="map" style={{ height: "450px" }}></div>
    </>
  );
};

export default Map;

// if (locations.length === 1) {
//   var map = L.map("map", {
//     scrollWheelZoom: true,
//   }).setView([locations[0].latitude, locations[0].longitude], 5);

//   L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//     maxZoom: 19,
//     attribution:
//       '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//   }).addTo(map);
//   console.log("locations length:", locations.length);
//   map.on("click", function (e) {
//     var coord = e.latlng;
//     var lat = coord.lat;
//     var lng = coord.lng;
//     console.log(
//       "You clicked the map at latitude: " + lat + " and longitude: " + lng
//     );
//   });

//   locations.forEach((location) => {
//     L.marker([location.latitude, location.longitude], {
//       icon: customIcon,
//     }).addTo(map);
//   });
// } else {
// }
// console.log("locations length:", locations.length);
// Create the map inside the useEffect hook

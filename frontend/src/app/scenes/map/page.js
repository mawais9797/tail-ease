"use client";
import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import the Leaflet CSS

import { useSelector } from "react-redux";
const customIcon = L.icon({
  iconUrl: "../../assets/paw.png",
  iconSize: [25, 25],
  iconAnchor: [16, 32],
});

const Map = () => {
  const [locations, setLocations] = useState([]);
  const animals = useSelector((state) => state.animalsData.animalsData);
  // const clinicData = useSelector((state) => state.allClinics.selectedClinic);

  // const selectedClinicByUser = clinicData
  //   ? clinicData
  //   : JSON.parse(localStorage.getItem("SELECTED_CLINIC_BY_USER"));
  // const abc = JSON.parse(localStorage.getItem("SELECTED_CLINIC_BY_USER"));
  // console.log("ABC=", abc);
  // console.log("selectedClinicByUser", selectedClinicByUser);

  var selectedClinicByUser = null;
  useEffect(() => {
    console.log("useEffect 1");
    // Fetch data from your API here and set it in the state
    // For now, using sampleData as a placeholder
    if (selectedClinicByUser) {
      console.log("iff working");
      setLocations(selectedClinicByUser);
    } else {
      console.log("else working");
      setLocations(animals);
    }
  }, []);

  useEffect(() => {
    console.log("useEffect 2");
    if (locations.length === 0) {
      // No locations, return early to avoid creating the map
      return;
    }

    if (locations.length === 1) {
      var map = L.map("map", {
        scrollWheelZoom: true,
      }).setView([locations[0].longitude, locations[0].latitude], 13);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
      console.log("locations length:", locations.length);
      map.on("click", function (e) {
        var coord = e.latlng;
        var lat = coord.lat;
        var lng = coord.lng;
        console.log(
          "You clicked the map at latitude: " + lat + " and longitude: " + lng
        );
      });

      locations.forEach((location) => {
        L.marker([location.longitude, location.latitude], {
          icon: customIcon,
        }).addTo(map);
      });
    } else {
    }
    console.log("locations length:", locations.length);
    // Create the map inside the useEffect hook
    var map = L.map("map", {
      scrollWheelZoom: true,
    }).setView([33.526, 74.453], 6);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    locations.forEach((location) => {
      L.marker([location.longitude, location.latitude], {
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

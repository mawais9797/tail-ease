import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import the Leaflet CSS
import { useDispatch } from "react-redux";

const MapAdd = ({ onLatLngUpdate }) => {
  const [newLat, setNewLat] = useState("");
  const [newLng, setNewLng] = useState("");

  const handleUpdate = () => {
    // Call the function passed from the parent component
    // onLatLngUpdate(newLat, newLng);
  };
  useEffect(() => {
    console.log("map: ");
    var map = L.map("map", {
      scrollWheelZoom: true,
    }).setView([29.973, 70.0048], 5);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    map.on("click", function (e) {
      debugger;
      var coord = e.latlng;
      var lat = coord.lat;
      var lng = coord.lng;
      //setting states with lat & lng
      setNewLat(coord.lat);
      setNewLng(coord.lng);

      onLatLngUpdate(coord.lat, coord.lng, "Congratulations!!");
      console.log(
        "You clicked the map at latitude: " + lat + " and longitude: " + lng
      );

      console.log("latUPDATE: ", newLat);
      console.log("llngUPDATE: ", newLng);
      handleUpdate();

      //   onLatLngUpdate(newLat, newLng);
    });
  }, []);
  return (
    <>
      <div id="map" style={{ height: "450px", width: "450px" }}></div>
    </>
  );
};

export default MapAdd;

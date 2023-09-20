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
  const [userSelectedClinic, setUserSelectedClinic] = useState(
    JSON.parse(localStorage.getItem("SELECTED_CLINIC_BY_USER"))
  );

  const [clinicLocations, setClinicLocations] = useState(
    JSON.parse(localStorage.getItem("allClinics"))
  );
  const [animalLocations, setAnimalLocations] = useState(
    JSON.parse(localStorage.getItem("allAnimalsCases"))
  );

  const allClinicsData = JSON.parse(localStorage.getItem("allClinics"));
  const allAnimalsData = JSON.parse(localStorage.getItem("allAnimalsCases"));

  console.log("localStorage allAnimalsData", allAnimalsData);
  // alert("localStorage allAnimalsData");
  console.log("localStorage allClinicsData", allClinicsData);
  // alert("localStorage allClinicsData", allClinicsData);

  const selectedClinicByUser = JSON.parse(
    localStorage.getItem("SELECTED_CLINIC_BY_USER")
  );

  console.log("selectedClinicByUser", selectedClinicByUser);

  useEffect(() => {
    console.log("useEffect 1");
    // Fetch data from your API here and set it in the state
    // For now, using sampleData as a placeholder
    if (selectedClinicByUser) {
      console.log("iffff selectedClinicByUser");
      setUserSelectedClinic(selectedClinicByUser);
    }
    if (allAnimalsData) {
      console.log("iffff allAnimalsData");
      setAnimalLocations(allAnimalsData);
    }
    if (allClinicsData) {
      console.log("iffff allClinicsData");
      setClinicLocations(allClinicsData);
    }
  }, []);

  useEffect(() => {
    console.log("useEffect 2");
    // if (
    //   !userSelectedClinic.length &&
    //   !clinicLocations.length &&
    //   !animalLocations.length
    // ) {
    //   console.log("here is problem");
    //   console.log("userSelectedClinic: ", userSelectedClinic);
    //   console.log("clinicLocations: ", clinicLocations);
    //   console.log("animalLocations: ", animalLocations);
    //   // alert("here is problem");
    //   // No locations, return early to avoid creating the map
    //   return;
    // }

    var map = L.map("map", {
      scrollWheelZoom: true,
    }).setView([33.526, 74.453], 5);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    userSelectedClinic?.forEach((uc) => {
      console.log("ucLocations: ", uc);
      L.marker([uc.longitude, uc.latitude], {
        icon: customIcon,
      }).addTo(map);
    });

    clinicLocations?.forEach((clinic) => {
      console.log("clinicLocations: ", clinic);
      const clinicMarker = L.marker([clinic.latitude, clinic.longitude], {
        icon: clinicIcon,
      }).addTo(map);
      clinicMarker.bindPopup(
        "<b>Clinic Name: </b>" +
          clinic.clinicName +
          "<br/><b>Phone No: </b>" +
          clinic.phoneNo +
          "<br/><b>Timings: </b>" +
          '<table align="center">' +
          "<thead>" +
          "<tr>" +
          '<th style="padding-right: 60px;">Day</th>' +
          '<th style="padding-right: 40px;">Open</th>' +
          '<th style="padding-right: 20px;">Close</th>' +
          "</tr>" +
          "</thead>" +
          "<tbody>" +
          Object.values(clinic.timings)
            .map((time) => {
              return (
                "<tr>" +
                '<td style="padding-right: 50px;">' +
                time.day +
                "</td>" +
                (time.disabled === true
                  ? '<td style="padding-right: 40px; color: red;">CLOSED</td>' +
                    '<td style="padding-right: 20px; color: red;">CLOSED</td>'
                  : '<td style="padding-right: 20px;">' +
                    time.open +
                    "</td>" +
                    "<td>" +
                    time.close +
                    "</td>") +
                "</tr>"
              );
            })
            .join("") + // Join the rows into a single string
          "</tbody>" +
          "</table>"
      );
    });

    animalLocations?.forEach((animal) => {
      console.log("animalLocations: ", animal);
      const animalMarker = L.marker([animal.latitude, animal.longitude], {
        icon: customIcon,
      }).addTo(map);

      animalMarker.bindPopup(
        "<b>Animal: </b>" +
          animal.woundedAnimal +
          "<br/><b>Owner: </b>" +
          animal.user.name +
          "<br/><b>Description: </b>" +
          animal.description
      );
    });

    // Clean up the map when the component unmounts
    // return () => {
    //   map.remove();
    // };
  }, []);

  return (
    <>
      <h3>Map</h3>
      <div id="map" style={{ height: "450px" }}></div>
    </>
  );
};

export default Map;

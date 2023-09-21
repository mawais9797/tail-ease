"use client";
import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import the Leaflet CSS
import { useSelector } from "react-redux";
import {
  BottomNavigation,
  BottomNavigationAction,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PetsIcon from "@mui/icons-material/Pets";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";

const customIcon = L.icon({
  iconUrl: "../../assets/paw.png",
  iconSize: [25, 25],
  iconAnchor: [16, 32],
});

const clinicIcon = L.icon({
  iconUrl: "../../assets/pawClinic.png",
  iconSize: [25, 25],
  iconAnchor: [16, 32],
});

const Map = () => {
  const [value, setValue] = useState(0);
  const [clinicLocations, setClinicLocations] = useState(
    JSON.parse(localStorage.getItem("allClinics"))
  );
  const [animalLocations, setAnimalLocations] = useState(
    JSON.parse(localStorage.getItem("allAnimalsCases"))
  );

  const [PetsClick, setPetsClick] = useState(true);
  const [ClinicClick, setClinicClick] = useState(true);

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

  const handlePetsData = () => {
    console.log("pets handle");

    setPetsClick(!PetsClick);
  };

  const handleClinicData = () => {
    console.log("clinic handle");

    setClinicClick(!ClinicClick);
  };

  useEffect(() => {
    console.log("useEffect 1");
    // Fetch data from your API here and set it in the state
    // For now, using sampleData as a placeholder
    // if (selectedClinicByUser) {
    //   console.log("iffff selectedClinicByUser");
    //   setUserSelectedClinic(selectedClinicByUser);
    // }
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

    var map = L.map("map", {
      scrollWheelZoom: true,
    }).setView([33.526, 74.453], 5);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    if (PetsClick) {
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
    }
    if (ClinicClick) {
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
    } else {
      // clinicLocations?.forEach((clinic) => {
      //   console.log("clinicLocations: ", clinic);
      //   const clinicMarker = L.marker([clinic.latitude, clinic.longitude], {
      //     icon: clinicIcon,
      //   }).addTo(map);

      //   clinicMarker.bindPopup(
      //     "<b>Clinic Name: </b>" +
      //       clinic.clinicName +
      //       "<br/><b>Phone No: </b>" +
      //       clinic.phoneNo +
      //       "<br/><b>Timings: </b>" +
      //       '<table align="center">' +
      //       "<thead>" +
      //       "<tr>" +
      //       '<th style="padding-right: 60px;">Day</th>' +
      //       '<th style="padding-right: 40px;">Open</th>' +
      //       '<th style="padding-right: 20px;">Close</th>' +
      //       "</tr>" +
      //       "</thead>" +
      //       "<tbody>" +
      //       Object.values(clinic.timings)
      //         .map((time) => {
      //           return (
      //             "<tr>" +
      //             '<td style="padding-right: 50px;">' +
      //             time.day +
      //             "</td>" +
      //             (time.disabled === true
      //               ? '<td style="padding-right: 40px; color: red;">CLOSED</td>' +
      //                 '<td style="padding-right: 20px; color: red;">CLOSED</td>'
      //               : '<td style="padding-right: 20px;">' +
      //                 time.open +
      //                 "</td>" +
      //                 "<td>" +
      //                 time.close +
      //                 "</td>") +
      //             "</tr>"
      //           );
      //         })
      //         .join("") + // Join the rows into a single string
      //       "</tbody>" +
      //       "</table>"
      //   );
      // });

      // animalLocations?.forEach((animal) => {
      //   console.log("animalLocations: ", animal);
      //   const animalMarker = L.marker([animal.latitude, animal.longitude], {
      //     icon: customIcon,
      //   }).addTo(map);

      //   animalMarker.bindPopup(
      //     "<b>Animal: </b>" +
      //       animal.woundedAnimal +
      //       "<br/><b>Owner: </b>" +
      //       animal.user.name +
      //       "<br/><b>Description: </b>" +
      //       animal.description
      //   );
      // });
      console.log("first");
    }

    // Clean up the map when the component unmounts
    return () => {
      map.remove();
    };
  }, [PetsClick, ClinicClick]);

  return (
    <>
      <h3>Map</h3>
      <BottomNavigation
        showLabels
        value={value}
        style={{ background: "#626fcd" }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Pets Cases"
            onClick={handlePetsData}
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Clinics"
            onClick={handleClinicData}
          />
        </FormGroup>
        {/* <BottomNavigationAction
          label="Pets"
          icon={<PetsIcon />}
          onClick={handlePetsData}
        />
        <BottomNavigationAction
          label="Clinics"
          icon={<LocalHospitalOutlinedIcon />}
          onClick={handleClinicData}
        /> */}
      </BottomNavigation>
      <div id="map" style={{ height: "450px" }}></div>
    </>
  );
};

export default Map;

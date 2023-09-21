"use client";
import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import the Leaflet CSS
import { useSelector } from "react-redux";

const customIcon = L.icon({
  iconUrl: "../../assets/pawClinic.png",
  iconSize: [25, 25],
  iconAnchor: [16, 32],
});

const clinicIcon = L.icon({
  iconUrl: "../../assets/pawClinic.png",
  iconSize: [25, 25],
  iconAnchor: [16, 32],
});

const ClinicMap = () => {
  const [locations, setLocations] = useState([]);
  const [userSelectedClinic, setUserSelectedClinic] = useState([]);

  const userClinicData = useSelector(
    (state) => state.allClinics.selectedClinic
  );

  console.log({ userClinicData });

  const selectedClinicByUser =
    userClinicData != undefined || userClinicData != null
      ? userClinicData
      : JSON.parse(localStorage.getItem("SELECTED_CLINIC_BY_USER"));

  console.log("selectedClinicByUser", selectedClinicByUser);

  useEffect(() => {
    console.log("useEffect 1");
    // Fetch data from your API here and set it in the state
    // For now, using sampleData as a placeholder
    if (selectedClinicByUser) {
      console.log("iffff selectedClinicByUser");
      setUserSelectedClinic(selectedClinicByUser);
    }
  }, []);

  useEffect(() => {
    console.log("useEffect 2");

    var map = L.map("map", {
      scrollWheelZoom: true,
    }).setView(
      [selectedClinicByUser[0].latitude, selectedClinicByUser[0].longitude],
      12
    );

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    selectedClinicByUser?.forEach((clinic) => {
      console.log("clinicLocations: ", clinic);
      const clinicMarker = L.marker([clinic.latitude, clinic.longitude], {
        icon: customIcon,
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
  }, []);

  return (
    <>
      <h3>Map</h3>
      <div id="map" style={{ height: "450px" }}></div>
    </>
  );
};

export default ClinicMap;

// "use client";
// import { Box, Typography } from "@mui/material";
// import React, { useEffect, useState } from "react";

// import L from "leaflet";
// import "leaflet/dist/leaflet.css"; // Import the Leaflet CSS
// import { useSelector } from "react-redux";
// import CircularProgress from "@mui/material/CircularProgress";

// const customIcon = L.icon({
//   iconUrl: "../../assets/pawClinic.png",
//   iconSize: [25, 25],
//   iconAnchor: [16, 32],
// });

// const ClinicMap = () => {
//   debugger;
//   const [Clinics, setClinics] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const reduxValue = useSelector((state) => state.allClinics.selectedClinic);
//   console.log("reduxValue: ", reduxValue);
//   // alert("reduxValue: ", reduxValue);
//   const userSelectedClinic =
//     reduxValue !== null
//       ? reduxValue
//       : JSON.parse(localStorage.getItem("SELECTED_CLINIC_BY_USER"));

//   console.log("userSelectedClinic: ", userSelectedClinic);
//   console.log("Clinics: ", Clinics);

//   useEffect(() => {
//     if (userSelectedClinic) {
//       console.log({ userSelectedClinic });
//       console.log("Value of Clinics Set NOW");
//       setClinics(userSelectedClinic);
//     }
//   }, []);

//   useEffect(() => {
//     console.log("useEffect2");

//     var map = L.map("map").setView(
//       [userSelectedClinic[0].latitude, userSelectedClinic[0].longitude],
//       15
//     );

//     L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//       maxZoom: 19,
//       attribution:
//         '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//     }).addTo(map);

//     Clinics.forEach((clinic) => {
//       L.marker([clinic.latitude, clinic.longitude], {
//         icon: customIcon,
//       }).addTo(map);
//     });
//   }, []);
//   return (
//     <Box sx={{ display: "flex" }}>
//       <Typography component="h1">Clinic Map</Typography>
//       <div id="map" style={{ height: "450px" }}></div>
//     </Box>
//   );
// };

// export default ClinicMap;

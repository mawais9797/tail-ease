"use client";
import {
  TextField,
  Box,
  Button,
  useTheme,
  Dialog,
  DialogContent,
} from "@mui/material";
// import { TimePicker } from "@mui/x-date-pickers";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import AdapterDayjs from "@mui/x-date-pickers/AdapterDayjs";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import axios from "axios";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import { tokens } from "../../theme";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import the Leaflet CSS
import MapAdd from "./MapAdd";
import TimePickerComponent from "./TimePicker";

// import { TimePicker } from "@mui/lab";

const ClinicAddition = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [ClinicName, setClinicName] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");
  const [Longitude, setLongitude] = useState("");
  const [Latitude, setLatitude] = useState("");
  const [err, setErr] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();
  const [OpenTimeMonday, setOpenTimeMonday] = useState(null);
  const [ClosetimeMonday, setClosetimeMonday] = useState(null);

  const handleTimeSet = (openTiming, closeTiming) => {
    setOpenTimeMonday(openTiming);
    setClosetimeMonday(closeTiming);
  };

  const router = useRouter();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClinicName = (event) => {
    setClinicName(event.target.value);
  };

  const handlePhoneNo = (event) => {
    setPhoneNo(event.target.value);
  };

  const handleLongitude = (event) => {
    setLongitude(event.target.value);
  };

  const handleLatitude = (event) => {
    setLatitude(event.target.value);
  };

  const handleCheckPasswordMatch = () => {
    if (PhoneNo !== Longitude) {
      setErr(true);
    } else {
      setErr(false);
    }
  };

  const handleSubmitABC = async (e) => {
    try {
      e.preventDefault();

      const userData = {
        userId: user.id,
        currentPassword: ClinicName,
        PhoneNo: Longitude,
      };
      if (PhoneNo === Longitude) {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        console.log("userdata=", userData);

        const response = await axios.post(
          "http://192.168.1.215:5000/user/changePassword",
          {
            userId: user.id,
            currentPassword: ClinicName,
            PhoneNo: Longitude,
          },
          config
        );
        console.log("response", response);
        if (response.status === 200) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
        }
        router.push("/scenes/dashboard");
      } else {
        alert("password does not match");
      }
    } catch (error) {
      console.log("AxiosError: ", error);
    }
  };

  const updateLatLng = (newLat, newLng, msg) => {
    setLongitude(newLng);
    setLatitude(newLat);
    console.log("Latitude: ", newLat);
    console.log("Longitude: ", newLng);
    console.log("Message: ", msg);
  };

  useEffect(() => {
    console.log("Latitude: ", Latitude);
    console.log("Longitude: ", Longitude);
    // mapComponent();
  }, []); // Empty dependency array to run the effect once after initial render

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box
          component="form"
          sx={{
            backgroundColor: colors.blueAccent[800],
            width: "770px",
            paddingBottom: "450px",
            marginLeft: "140px",
            marginBottom: "5px",
            marginTop: "0px",
            paddingLeft: "55px",
            paddingBottom: "20px",
            paddingTop: "30px",
            border: "1px solid rgb(201 203 205)",
            borderRadius: "5px",
            boxShadow: "2px 4px 9px -1px",
          }}
        >
          <h2 style={{ marginLeft: "35px" }}>Clinic Addition Form</h2>
          <br />
          {/* <form onSubmit={handleSubmitABC}> */}
          <TextField
            label="Clinic Name"
            type="text"
            value={ClinicName}
            onChange={handleClinicName}
            color="success"
            sx={{ width: "350px" }}
            autoComplete="on"
          />
          <br />
          <br />
          <TextField
            label="Contact No."
            value={PhoneNo}
            onChange={handlePhoneNo}
            type="text"
            color="success"
            error={err}
            sx={{ width: "350px" }}
          />
          <br />
          <br />

          <Button
            onClick={handleOpen}
            sx={{
              backgroundColor: colors.blueAccent[500],
              "&:hover": {
                backgroundColor: colors.blueAccent[300],
              },
            }}
          >
            <AddLocationIcon /> Add Clinic Location
          </Button>

          <Dialog open={open} onClose={handleClose}>
            <DialogContent>
              <MapAdd onLatLngUpdate={updateLatLng} />
            </DialogContent>
          </Dialog>
          <br />
          <br />
          <TextField
            disabled
            label="Longitude"
            value={Longitude}
            onChange={handleLongitude}
            type="text"
            color="success"
            onBlur={handleCheckPasswordMatch}
            helperText={err ? "Password does not match" : ""}
            error={err}
            sx={{ width: "350px" }}
          />
          <br />
          <br />
          <TextField
            disabled
            label="Latitude"
            value={Latitude}
            onChange={handleLatitude}
            type="text"
            color="success"
            onBlur={handleCheckPasswordMatch}
            helperText={err ? "Password does not match" : ""}
            error={err}
            sx={{ width: "350px" }}
          />
          <br />
          <br />
          <TimePickerComponent settingTheTime={handleTimeSet} />

          <br />
          <br />
          <Button
            onClick={handleSubmitABC}
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: "rgb(25 118 210)",
              width: "350px",
              "&:hover": {
                backgroundColor: "rgb(48 135 235)",
                opacity: "0.7",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </LocalizationProvider>
    </>
  );
};

export default ClinicAddition;

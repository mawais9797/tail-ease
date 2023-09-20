"use client";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { TextField, Box, Button } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import TimePickerComponent from "../clinicsadd/TimePicker";

const ClinicAddition = () => {
  const [DoctorName, setDoctorName] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");
  const [Address, setAddress] = useState("");
  const [City, setCity] = useState("");
  const [Specialization, setSpecialization] = useState("");
  const [err, setErr] = useState(false);
  const [ClinicTimingData, setClinicTimingData] = useState(null);

  const router = useRouter();

  const handleTimeSet = (timingDataClinic) => {
    console.log("handleTimeSet Called in ClinicAdd: ", timingDataClinic);
    setClinicTimingData(Object.values(timingDataClinic));
  };
  const handleDoctorName = (event) => {
    setDoctorName(event.target.value);
  };

  const handlePhoneNo = (event) => {
    setPhoneNo(event.target.value);
  };

  const handleAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleCity = (event) => {
    setCity(event.target.value);
  };

  const handleSpecialization = (event) => {
    setSpecialization(event.target.value);
  };

  const handleDoctorTime = (event) => {
    console.log("handleDoctorTime");
  };

  const handleSubmitABC = async (e) => {
    try {
      e.preventDefault();
      const userData = {
        name: DoctorName,
        officeHours: ClinicTimingData,
        address: Address,
        city: City,
        phoneNo: PhoneNo,
        speciality: Specialization,
      };
      console.log("here", userData);

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        "http://192.168.1.215:5000/VetDoc/Registration",
        {
          name: DoctorName,
          officeHours: ClinicTimingData,
          address: Address,
          city: City,
          phoneNo: PhoneNo,
          speciality: Specialization,
        }
      );

      // const response = await axios.post(
      //   "http://192.168.1.215:5000/VetDoc/Registration",
      //   {
      //     body: {
      //       name: DoctorName,
      //       officeHours: ClinicTimingData,
      //       address: Address,
      //       city: City,
      //       phoneNo: PhoneNo,
      //       speciality: Specialization,
      //     },
      //   }
      // );
      console.log("response", response);

      // router.push("/scenes/dashboard");
    } catch (error) {
      console.log("AxiosError: ", error);
    }
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box
          component="form"
          sx={{
            width: "470px",
            paddingBottom: "450px",
            marginLeft: "340px",
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
          <h2 style={{ marginLeft: "35px" }}>Doctor Registration Form</h2>
          <br />
          {/* <form onSubmit={handleSubmitABC}> */}
          <TextField
            label="Doctor's Name"
            type="text"
            value={DoctorName}
            onChange={handleDoctorName}
            color="success"
            sx={{ width: "350px" }}
            autoComplete="on"
            required
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
            required
          />
          <br />
          <br />
          <TextField
            label="Address"
            value={Address}
            onChange={handleAddress}
            type="text"
            color="success"
            sx={{ width: "350px" }}
            required
          />
          <br />
          <br />

          <TextField
            label="City"
            value={City}
            onChange={handleCity}
            type="text"
            color="success"
            sx={{ width: "350px" }}
            required
          />
          <br />
          <br />

          <TextField
            label="Specialization"
            value={Specialization}
            onChange={handleSpecialization}
            type="text"
            color="success"
            sx={{ width: "350px" }}
            required
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

"use client";
"use client";
import { TextField, Box, Button } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ClinicAddition = () => {
  const [DoctorName, setDoctorName] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");
  const [Address, setAddress] = useState("");
  const [City, setCity] = useState("");
  const [Specialization, setSpecialization] = useState("");
  const [err, setErr] = useState(false);

  const router = useRouter();

  const handleDoctorName = (event) => {
    setDoctorName(event.target.value);
  };

  const handlePhoneNo = (event) => {
    setPhoneNo(event.target.value);
  };

  const handleAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleSpecialization = (event) => {
    setSpecialization(event.target.value);
  };

  const handleCheckPasswordMatch = () => {
    if (PhoneNo !== Address) {
      setErr(true);
    } else {
      setErr(false);
    }
  };

  const handleSubmitABC = async (e) => {
    try {
      e.preventDefault();
      const user = JSON.parse(localStorage.getItem("user"));
      const userData = {
        userId: user.id,
        currentPassword: DoctorName,
        PhoneNo: Address,
      };
      if (PhoneNo === Address) {
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
            currentPassword: DoctorName,
            PhoneNo: Address,
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

  return (
    <>
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
        <h2 style={{ marginLeft: "35px" }}>Clinic Addition Form</h2>
        <br />
        {/* <form onSubmit={handleSubmitABC}> */}
        <TextField
          label="Clinic Name"
          type="text"
          value={DoctorName}
          onChange={handleDoctorName}
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
        <TextField
          label="Address"
          value={Address}
          onChange={handleAddress}
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
          label="City"
          value={City}
          onChange={handleCity}
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
          label="Specialization"
          value={Specialization}
          onChange={handleSpecialization}
          type="text"
          color="success"
          onBlur={handleCheckPasswordMatch}
          helperText={err ? "Password does not match" : ""}
          error={err}
          sx={{ width: "350px" }}
        />

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
    </>
  );
};

export default ClinicAddition;

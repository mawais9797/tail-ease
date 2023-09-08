"use client";
import {
  TextField,
  Container,
  Box,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
  Input,
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

const Register = () => {
  const [checked, setChecked] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleSubmitABC = async (e) => {
    try {
      e.preventDefault();
      const userData = {
        name: name,
        email: email,
        password: password,
        phoneNo: phone,
      };
      console.log("userData= ", userData);
      const response = await axios.post(
        "http://192.168.1.215:5000/user/registration",
        userData
      );
      console.log("response", response);
    } catch (error) {
      console.log("AxiosError: ", error);
    }
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          width: "400px",
          paddingBottom: "450px",
          marginLeft: "480px",
          marginBottom: "5px",
          marginTop: "100px",
          paddingLeft: "55px",
          paddingBottom: "30px",
          paddingTop: "30px",
          border: "1px solid rgb(201 203 205)",
          borderRadius: "5px",
          boxShadow: "2px 4px 9px -1px",
        }}
      >
        <h3 style={{ marginLeft: "35px" }}>Welcome to TailEase! 👋🏻</h3>
        <br />
        {/* <form onSubmit={handleSubmitABC}> */}
        <TextField
          label="Name"
          type="text"
          value={name}
          onChange={handleName}
          color="success"
          sx={{ width: "350px" }}
        />
        <br />
        <br />

        <TextField
          label="Phone No."
          type="text"
          value={phone}
          onChange={handlePhone}
          color="success"
          sx={{ width: "350px" }}
        />
        <br />
        <br />

        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={handleEmail}
          color="success"
          sx={{ width: "350px" }}
        />
        <br />
        <br />
        <TextField
          label="Password"
          value={password}
          onChange={handlePassword}
          type="password"
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
          Register
        </Button>
        {/* </form> */}
        <Typography
          sx={{
            float: "left",
          }}
        >
          Already have an account?
        </Typography>
        <Link href="/login">
          <Typography
            sx={{
              color: "#1976d2",
              margin: "10px 0px 0px 229px",
              "&:hover": { color: "#1976d2", opacity: "0.5" },
            }}
          >
            Login Here
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default Register;

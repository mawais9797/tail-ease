"use client";
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
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import * as Yup from "yup";

const ChangePassword = () => {
  const [currentPassowrd, setCurrentPassowrd] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setErr] = useState(false);

  const router = useRouter();

  const handleCurrentPassowrd = (event) => {
    setCurrentPassowrd(event.target.value);
  };

  const handleNewPassword = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const validationSchema = Yup.object().shape({
    newPassword: Yup.string()
      .required("New password is required")
      .min(4, "New password must be at least 4 characters long"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleCheckPasswordMatch = () => {
    if (newPassword !== confirmPassword) {
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
        currentPassword: currentPassowrd,
        newPassword: confirmPassword,
      };
      if (newPassword === confirmPassword) {
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
            currentPassword: currentPassowrd,
            newPassword: confirmPassword,
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
          marginLeft: "400px",
          marginBottom: "5px",
          marginTop: "0px",
          paddingLeft: "55px",
          paddingBottom: "30px",
          paddingTop: "30px",
          border: "1px solid rgb(201 203 205)",
          borderRadius: "5px",
          boxShadow: "2px 4px 9px -1px",
        }}
      >
        <h3 style={{ marginLeft: "35px" }}>Change Your Password</h3>
        <br />
        {/* <form onSubmit={handleSubmitABC}> */}
        <TextField
          label="Current Password"
          type="password"
          value={currentPassowrd}
          onChange={handleCurrentPassowrd}
          color="success"
          sx={{ width: "350px" }}
        />
        <br />
        <br />
        <TextField
          label="New Password"
          value={newPassword}
          onChange={handleNewPassword}
          type="password"
          color="success"
          error={err}
          sx={{ width: "350px" }}
        />
        <br />
        <br />
        <TextField
          label="Confirm New Password"
          value={confirmPassword}
          onChange={handleConfirmPassword}
          type="password"
          color="success"
          onBlur={handleCheckPasswordMatch}
          helperText={err ? "Password does not match" : ""}
          error={err}
          sx={{ width: "350px" }}
        />

        <br />

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

export default ChangePassword;

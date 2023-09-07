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

const Login = () => {
  const [checked, setChecked] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handlechecked = (event) => {
    setChecked(event.target.checked);
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmitABC = async (e) => {
    try {
      e.preventDefault();
      const userData = {
        phoneNo: phone,
        password: password,
      };
      const phoneNo = phone;

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      console.log("userdata=", userData);

      const response = await axios.post(
        "http://localhost:5001/user/login",
        {
          phoneNo,
          password,
        },
        config
      );
      console.log("response", response);
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      router.push("/scenes/dashboard");
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
          label="Password"
          value={password}
          onChange={handlePassword}
          type="password"
          sx={{ width: "350px" }}
        />

        <br />
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={handlechecked}
              label="Remember Me"
              style={{ color: checked ? "#A1E8A1" : "" }}
            />
          }
          label="Remember Me"
          sx={{ float: "left" }}
        />

        <Link href="#">
          <Typography
            sx={{
              color: "#1976d2",
              margin: "10px 0px 0px 229px",
              "&:hover": { color: "#1976d2", opacity: "0.5" },
            }}
          >
            Forgot Password
          </Typography>
        </Link>

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
          Login
        </Button>
        {/* </form> */}
        <Typography
          sx={{
            float: "left",
          }}
        >
          New on our platform?
        </Typography>
        <Link href="/register">
          <Typography
            sx={{
              color: "#1976d2",
              margin: "10px 0px 0px 229px",
              "&:hover": { color: "#1976d2", opacity: "0.5" },
            }}
          >
            Create an account
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default Login;

// "use client";
// import React from "react";
// import {
//   TextField,
//   Container,
//   Box,
//   Button,
//   FormControlLabel,
//   Checkbox,
//   Typography,
// } from "@mui/material";
// import Link from "next/link";
// import { useFormik } from "formik"; // Import useFormik hook
// import * as yup from "yup"; // Import Yup for validation
// import axios from "axios";

// const validationSchema = yup.object({
//   phoneNo: yup.string().required("Phone No. is required"),
//   password: yup.string().required("Password is required"),
// });

// const Login = () => {
//   const handleSubmitLogin = async (e, values) => {
//     e.preventDefault();
//     // Handle form submission here
//     const userData = {
//       phoneNo: values.phoneNo,
//       password: values.password,
//     };
//     console.log("user= ", userData);
//   };
//   const formik = useFormik({
//     initialValues: {
//       phoneNo: "",
//       password: "",
//       rememberMe: false,
//     },
//     validationSchema: validationSchema,
//     onSubmit: (event, values) => {
//       event.preventDefault();
//       // Handle form submission here
//       const userData = {
//         phoneNo: values.phoneNo,
//         password: values.password,
//       };
//       console.log("user= ", values);

//       // axios
//       //   .post("http://192.168.1.215:5000/user/login", userData)
//       //   .then((response) => {
//       //     // Handle the response
//       //   })
//       //   .catch((error) => {
//       //     // Handle errors
//       //   });
//     },
//   });

//   return (
//     <form onSubmit={handleSubmitLogin}>
//       <Box
//         component="form"
//         sx={{
//           width: "400px",
//           paddingBottom: "450px",
//           marginLeft: "480px",
//           marginBottom: "5px",
//           marginTop: "100px",
//           paddingLeft: "55px",
//           paddingBottom: "30px",
//           paddingTop: "30px",
//           border: "1px solid rgb(201 203 205)",
//           borderRadius: "5px",
//           boxShadow: "2px 4px 9px -1px",
//         }}
//       >
//         {/* ... Your form elements */}
//         <TextField
//           label="Phone No."
//           type="text"
//           color="success"
//           sx={{ width: "350px" }}
//           id="phoneNo"
//           name="phoneNo"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.phoneNo}
//           error={formik.touched.phoneNo && Boolean(formik.errors.phoneNo)}
//           helperText={formik.touched.phoneNo && formik.errors.phoneNo}
//         />
//         <br />
//         <br />
//         <TextField
//           label="Password"
//           type="password"
//           color="success"
//           sx={{ width: "350px" }}
//           id="password"
//           name="password"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.password}
//           error={formik.touched.password && Boolean(formik.errors.password)}
//           helperText={formik.touched.password && formik.errors.password}
//         />

//         {/* ... More form fields */}
//         <br />

//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={formik.values.rememberMe}
//               onChange={formik.handleChange}
//               color="success"
//               name="rememberMe"
//             />
//           }
//           label="Remember Me"
//           sx={{ float: "left" }}
//         />

//         <Link href="#">
//           <Typography
//             sx={{
//               color: "#1976d2",
//               margin: "8px 0px 0px 229px",
//               "&:hover": { color: "#1976d2", opacity: "0.5" },
//             }}
//           >
//             Forgot Password
//           </Typography>
//         </Link>

//         {/* ... More form elements */}
//         <br />
//         <Button
//           type="submit"
//           variant="contained"
//           sx={{
//             backgroundColor: "rgb(25 118 210)",
//             width: "350px",
//             "&:hover": {
//               backgroundColor: "rgb(48 135 235)",
//               opacity: "0.7",
//             },
//           }}
//         >
//           Login
//         </Button>
//       </Box>
//     </form>
//   );
// };

// export default Login;

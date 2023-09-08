"use client";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";

import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { vetDoctors, clinics } from "../../redux/actions/projectActions";

const Clinics = () => {
  debugger;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();

  const clincisData = useSelector((state) => state.allClinics);
  console.log("doctorsData: ", clincisData);
  const allClinicsData = clincisData;
  useEffect(() => {
    dispatch(clinics());
  }, []);

  let counter = 0;

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Header
          title="Clinics Details"
          sx={{ flex: 1 }}
          subtitle="List of Onboard Clinics"
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "rgb(25 118 210)",
            "&:hover": {
              backgroundColor: "rgb(73 136 199 / 79%)",
            },
          }}
        >
          Add Doctor
        </Button>
      </div>
      <TableContainer>
        <Table>
          <TableHead sx={{ backgroundColor: colors.blueAccent[700] }}>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">clinicName</TableCell>
              <TableCell align="right">phoneNo</TableCell>
              <TableCell align="right">latitude</TableCell>
              <TableCell align="right">longitude</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allClinicsData?.map((doc, index) => {
              return (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{index + 1}</TableCell>
                  <TableCell align="right">{doc.clinicName}</TableCell>
                  <TableCell align="right">{doc.coordinates[0]}</TableCell>
                  <TableCell align="right">{doc.coordinates[1]}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Clinics;

// "use client";

// import { Box } from "@mui/material";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { tokens } from "../../theme";
// import { mockDataContacts } from "../../data/mockData";
// import Header from "../../components/Header";
// import { useTheme } from "@mui/material";
// import axios from "axios";
// import { useEffect, useState } from "react";

// const Contacts = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [data, setData] = useState([]);

//   const ApiData = async () => {
//     try {
//       const response = await axios.get(
//         "http://192.168.1.215:5000/VetClinic/all"
//       );
//       console.log("Animals= ", response.data);
//       setData(response.data.getWoundedAnimals);
//     } catch (error) {
//       console.log("API ERROR= ", error);
//     }
//   };
//   useEffect(() => {
//     ApiData();
//   }, []);
//   const columns = [
//     { field: "id", headerName: "ID", flex: 0.5 },
//     { field: "_id", headerName: " ID" },
//     {
//       field: "name",
//       headerName: "Name",
//       flex: 1,
//       cellClassName: "name-column--cell",
//     },
//     {
//       field: "age",
//       headerName: "Age",
//       type: "number",
//       headerAlign: "left",
//       align: "left",
//     },
//     {
//       field: "phone",
//       headerName: "Phone Number",
//       flex: 1,
//     },
//     {
//       field: "email",
//       headerName: "Email",
//       flex: 1,
//     },
//     {
//       field: "address",
//       headerName: "Address",
//       flex: 1,
//     },
//     {
//       field: "city",
//       headerName: "City",
//       flex: 1,
//     },
//     {
//       field: "zipCode",
//       headerName: "Zip Code",
//       flex: 1,
//     },
//   ];

//   return (
//     <Box m="20px">
//       <Header title="CLINICS" subtitle="List of CLINICS " />
//       <Box
//         m="40px 0 0 0"
//         height="75vh"
//         sx={{
//           "& .MuiDataGrid-root": {
//             border: "none",
//           },
//           "& .MuiDataGrid-cell": {
//             borderBottom: "none",
//             color: colors.grey[100],
//           },
//           "& .name-column--cell": {
//             color: colors.greenAccent[600],
//           },
//           "& .MuiDataGrid-columnHeaders": {
//             backgroundColor: colors.blueAccent[700],
//             borderBottom: "none",
//           },
//           "& .MuiDataGrid-virtualScroller": {
//             backgroundColor: colors.primary[400],
//           },
//           "& .MuiDataGrid-footerContainer": {
//             borderTop: "none",
//             backgroundColor: colors.blueAccent[700],
//           },
//           "& .MuiCheckbox-root": {
//             color: `${colors.greenAccent[200]} !important`,
//           },
//           "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
//             color: `${colors.grey[100]} !important`,
//           },
//         }}
//       >
//         <DataGrid
//           rows={mockDataContacts}
//           columns={columns}
//           components={{ Toolbar: GridToolbar }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default Contacts;

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
import { vetDoctors } from "../../redux/actions/projectActions";

const Team = () => {
  debugger;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();

  const doctorsData = useSelector((state) => state.vetDoctors);
  console.log("doctorsData: ", doctorsData.vetDoctors);
  const allVetDoctors = doctorsData.vetDoctors;
  useEffect(() => {
    dispatch(vetDoctors());
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
          title="Doctors Team"
          sx={{ flex: 1 }}
          subtitle="List of Onboard Doctors"
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
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">officeHours</TableCell>
              <TableCell align="right">address</TableCell>
              <TableCell align="right">city</TableCell>
              <TableCell align="right">phoneNo</TableCell>
              <TableCell align="right">speciality</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allVetDoctors?.map((doc, index) => {
              return (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{index + 1}</TableCell>
                  <TableCell align="right">{doc.name}</TableCell>
                  <TableCell align="right">{doc.officeHours}</TableCell>
                  <TableCell align="right">{doc.address}</TableCell>
                  <TableCell align="right">{doc.city}</TableCell>
                  <TableCell align="right">{doc.phoneNo}</TableCell>
                  <TableCell align="right">{doc.speciality}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Team;

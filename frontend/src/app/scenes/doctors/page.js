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
import { useRouter } from "next/navigation";

const Team = () => {
  debugger;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = () => {
    console.log("here");
    router.push("/scenes/doctorsadd");
  };

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
          onClick={handleClick}
        >
          Add Doctor
        </Button>
      </div>
      <TableContainer>
        <Table>
          <TableHead sx={{ backgroundColor: colors.blueAccent[700] }}>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">address</TableCell>
              <TableCell align="center">city</TableCell>
              <TableCell align="center">phoneNo</TableCell>
              <TableCell align="center">speciality</TableCell>
              <TableCell align="center">officeHours</TableCell>
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
                  <TableCell align="right">{doc.address}</TableCell>
                  <TableCell align="right">{doc.city}</TableCell>
                  <TableCell align="right">{doc.phoneNo}</TableCell>
                  <TableCell align="right">{doc.speciality}</TableCell>
                  <TableCell align="right">
                    <table align="center">
                      <thead>
                        <tr>
                          <th style={{ paddingRight: "60px" }}>Day</th>
                          <th style={{ paddingRight: "40px" }}>Open</th>
                          <th style={{ paddingRight: "20px" }}>Close</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.values(doc.officeHours)?.map((time) => {
                          return (
                            <>
                              {time.disabled === true ? (
                                <>
                                  <tr>
                                    <td style={{ paddingRight: "50px" }}>
                                      {time.day}
                                    </td>
                                    <td
                                      style={{
                                        paddingRight: "40px",
                                        color: "red",
                                      }}
                                    >
                                      CLOSED
                                    </td>
                                    <td
                                      style={{
                                        paddingRight: "20px",
                                        color: "red",
                                      }}
                                    >
                                      CLOSED
                                    </td>
                                  </tr>
                                </>
                              ) : (
                                <>
                                  <tr>
                                    <td style={{ paddingRight: "50px" }}>
                                      {time.day}
                                    </td>
                                    <td style={{ paddingRight: "20px" }}>
                                      {time.open}
                                    </td>
                                    <td>{time.close}</td>
                                  </tr>
                                </>
                              )}
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </TableCell>
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

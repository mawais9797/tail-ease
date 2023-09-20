"use client";
import {
  Box,
  Button,
  List,
  ListItem,
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
import { clinics, selectedClinicID } from "../../redux/actions/projectActions";
import { useRouter } from "next/navigation";

const Clinics = () => {
  // debugger;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const router = useRouter();

  const clincisData = useSelector((state) => state.allClinics);
  console.log("ClinicsData: ", clincisData.allClinics);
  const allClinicsData = clincisData.allClinics ? clincisData.allClinics : [];
  useEffect(() => {
    dispatch(clinics());
  }, []);

  let counter = 0;

  const handleSelectClinic = (clinicID) => {
    console.log("ClinicID: ", clinicID);
    dispatch(selectedClinicID(clinicID));
    router.push("/scenes/map");
  };

  const handleAddClinic = () => {
    router.push("/scenes/clinicsadd");
  };

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
          onClick={handleAddClinic}
        >
          Add Clinic
        </Button>
      </div>
      <TableContainer sx={{ width: "1060px", marginLeft: "20px" }}>
        <Table>
          <TableHead sx={{ backgroundColor: colors.blueAccent[700] }}>
            <TableRow>
              <TableCell align="center" style={{ color: colors.grey[100] }}>
                ID
              </TableCell>
              <TableCell align="center" style={{ color: colors.grey[100] }}>
                clinicName
              </TableCell>
              <TableCell align="center" style={{ color: colors.grey[100] }}>
                phoneNo
              </TableCell>
              <TableCell align="center" style={{ color: colors.grey[100] }}>
                Timings
              </TableCell>

              <TableCell align="center" style={{ color: colors.grey[100] }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allClinicsData?.map((doc, index) => {
              return (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{doc.clinicName}</TableCell>
                  <TableCell align="center">{doc.phoneNo}</TableCell>
                  <TableCell align="center">
                    <table align="center">
                      <thead>
                        <tr>
                          <th style={{ paddingRight: "60px" }}>Day</th>
                          <th style={{ paddingRight: "40px" }}>Open</th>
                          <th style={{ paddingRight: "20px" }}>Close</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.values(doc.timings).map((time) => {
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
                    {/* internal Table Close */}
                  </TableCell>

                  <TableCell align="right">
                    <Button
                      sx={{
                        backgroundColor: colors.blueAccent[500],
                        "&:hover": {
                          backgroundColor: colors.blueAccent[300],
                        },
                      }}
                      onClick={(e) => handleSelectClinic(doc._id)}
                    >
                      View
                    </Button>
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

export default Clinics;

"use client";
import { useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { fetchAnimals } from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const animals = useSelector((state) => state.animals.animals);
  const woundedAnimals = animals.woundedAnimals;
  console.log("data", animals);

  console.log("Users", woundedAnimals);
  useEffect(() => {
    dispatch(fetchAnimals());
  }, []);

  const columns = [
    { field: "_id", headerName: "ID" },
    {
      field: "woundedAnimal",
      headerName: "Wounded Animal",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "user",
      headerName: "User",
      flex: 1,
      renderCell: (params) => (
        <Typography>
          {params.value && params.value.length > 0 ? params.value.name : "N/A"}
        </Typography>
      ),
    },
    {
      field: "imageUrl",
      headerName: "Image",
      flex: 1,
      renderCell: (params) => (
        <img
          src={params.row.imageUrl}
          alt="Animal"
          style={{ width: "100px", height: "80px" }}
        />
      ),
    },
    {
      field: "imageUrl",
      headerName: "Image",
      flex: 1,
      renderCell: (params) => (
        <img
          src={params.row.imageUrl}
          alt="Animal"
          style={{ width: "100px", height: "80px" }}
        />
      ),
    },
  ];
  const getRowId = (row) => row._id;

  return (
    <Box m="20px">
      <Header title="WoundedAnimals" subtitle="List of Rescued Animals" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        {woundedAnimals && (
          <DataGrid
            checkboxSelection
            rows={woundedAnimals}
            columns={columns}
            getRowId={getRowId}
          />
        )}
      </Box>
    </Box>
  );
};

export default Invoices;

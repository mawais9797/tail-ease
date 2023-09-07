"use client";
import { useEffect } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { animalDataAction } from "../../redux/actions/projectActions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Invoices = () => {
  // debugger;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dispatch = useDispatch();
  const animals = useSelector((state) => state.animalsData);
  console.log("animalDataaaa= ", animals);

  const woundedAnimals = animals.animalsData;

  console.log("Wounded", woundedAnimals);

  useEffect(() => {
    // alert("Invoice");
    dispatch(animalDataAction());
  }, []);

  const handleDelete = async (postID) => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("user", user.id);
    console.log("postID", postID);
    const mypost = {
      postId: postID,
    };
    try {
      const { data } = await axios.delete(
        `http://192.168.1.215:5000/woundedAnimals/${user.id}`,
        {
          data: {
            postId: postID,
          },
        }
      );
      console.log("responseDelete= ", data);
    } catch (error) {
      console.log("error", error);
    }
  };

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
        <Typography>{params.value && params.value.name}</Typography>
      ),
    },
    {
      field: "latitude",
      headerName: "Latitude",
      flex: 1,
    },
    {
      field: "longitude",
      headerName: "Longitude",
      flex: 1,
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
      headerName: "Action",
      flex: 1,

      renderCell: (params) => (
        <Button
          variant="outlined"
          sx={{ borderColor: "green" }}
          onClick={() => handleDelete(params.row._id)}
        >
          delete
        </Button>
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

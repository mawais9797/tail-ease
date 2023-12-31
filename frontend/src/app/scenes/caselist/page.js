"use client";
import { useEffect } from "react";
import {
  Box,
  Button,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { animalDataAction } from "../../redux/actions/projectActions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useRouter } from "next/navigation";

const Invoices = () => {
  // debugger;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dispatch = useDispatch();
  const animals = useSelector((state) => state.animalsData);
  console.log("animalDataaaa= ", animals);
  const router = useRouter();
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
        `http://192.168.1.215:5000/woundedAnimals/adminDelete/${user.id}`,
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
          sx={{ backgroundColor: colors.blueAccent[400] }}
          onClick={() => handleDelete(params.row._id)}
        >
          delete
        </Button>
      ),
    },
  ];
  const getRowId = (row) => row._id;

  return (
    // <TableContainer>
    //   <Table sx={{ minWidth: 450 }} aria-label="Data Table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>ID</TableCell>
    //         <TableCell>Name</TableCell>
    //         <TableCell>officeHours</TableCell>
    //         <TableCell>address</TableCell>
    //         <TableCell>city</TableCell>
    //         <TableCell>phoneNo</TableCell>
    //         <TableCell>speciality</TableCell>
    //       </TableRow>
    //     </TableHead>
    //   </Table>
    // </TableContainer>
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
            color: colors.grey[100],
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
          // Responsive styles
          [theme.breakpoints.down("sm")]: {
            height: "50vh", // Adjust the height for smaller screens
          },
          [theme.breakpoints.down("xs")]: {
            height: "30vh", // Adjust the height for even smaller screens
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

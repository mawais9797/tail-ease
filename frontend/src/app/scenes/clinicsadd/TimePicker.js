// import { Box, Grid, Stack, TextField, Checkbox, useTheme } from "@mui/material";
// import { DatePicker, TimePicker } from "@mui/lab";

// import React, { useState } from "react";
// import { tokens } from "../../theme";

// const TimePickerComponent = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   // Define state variables for open and close times for each day
//   const [timingData, setTimingData] = useState({
//     Monday: { open: null, close: null, disabled: false },
//     Tuesday: { open: null, close: null, disabled: false },
//     Wednesday: { open: null, close: null, disabled: false },
//     Thursday: { open: null, close: null, disabled: false },
//     Friday: { open: null, close: null, disabled: false },
//     Saturday: { open: null, close: null, disabled: false },
//     Sunday: { open: null, close: null, disabled: false },
//   });

//   console.log("timingData: ", timingData);

//   const handleOpenTimeChange = (day, newValue) => {
//     // Update the state for the specific day's open time
//     setTimingData((prevTimingData) => ({
//       ...prevTimingData,
//       [day]: { ...prevTimingData[day], open: newValue },
//     }));
//   };

//   const handleCloseTimeChange = (day, newValue) => {
//     // Update the state for the specific day's close time
//     setTimingData((prevTimingData) => ({
//       ...prevTimingData,
//       [day]: { ...prevTimingData[day], close: newValue },
//     }));
//   };

//   const handleCheckboxChange = (day) => {
//     // Toggle the disabled state for the specific day
//     setTimingData((prevTimingData) => ({
//       ...prevTimingData,
//       [day]: {
//         ...prevTimingData[day],
//         disabled: !prevTimingData[day].disabled,
//         open: null, // Reset the open time when disabling
//         close: null, // Reset the close time when disabling
//       },
//     }));
//   };

//   var week = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];

//   return (
//     <Stack component="form" spacing={4} sx={{ width: "250px" }}>
//       <Grid container spacing={5}>
//         {week.map((day, index) => (
//           <div key={index}>
//             <Grid container alignItems="center">
//               <Checkbox
//                 checked={!timingData[day].disabled}
//                 onChange={() => handleCheckboxChange(day)}
//               />
//               <h4>{day}:</h4>
//             </Grid>
//             <Grid item xs={12} md={12}>
//               <TimePicker
//                 label={`Open Time (${day})`}
//                 color="success"
//                 style={{
//                   color: colors.blueAccent[400],
//                 }}
//                 renderInput={(ot) => (
//                   <TextField
//                     {...ot}
//                     autoComplete="off"
//                     disabled={timingData[day].disabled}
//                   />
//                 )}
//                 value={timingData[day].open}
//                 onChange={(newValue) => handleOpenTimeChange(day, newValue)}
//               />
//             </Grid>
//             <br />
//             <Grid item xs={12} md={12}>
//               <TimePicker
//                 label={`Close Time (${day})`}
//                 renderInput={(ct) => (
//                   <TextField
//                     {...ct}
//                     autoComplete="off"
//                     disabled={timingData[day].disabled}
//                   />
//                 )}
//                 value={timingData[day].close}
//                 onChange={(newValue) => handleCloseTimeChange(day, newValue)}
//               />
//             </Grid>
//           </div>
//         ))}
//       </Grid>
//     </Stack>
//   );
// };

// export default TimePickerComponent;

import { Box, Grid, Stack, TextField, Checkbox, useTheme } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/lab";

import React, { useState } from "react";
import { tokens } from "../../theme";

const TimePickerComponent = ({ settingTheTime }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Define state variables for open and close times for each day
  const [timingData, setTimingData] = useState({
    Monday: { open: null, close: null, disabled: false },
    Tuesday: { open: null, close: null, disabled: false },
    Wednesday: { open: null, close: null, disabled: false },
    Thursday: { open: null, close: null, disabled: false },
    Friday: { open: null, close: null, disabled: false },
    Saturday: { open: null, close: null, disabled: false },
    Sunday: { open: null, close: null, disabled: false },
  });
  const [Test, setTest] = useState();
  console.log("timingData: ", timingData);

  const handleTest = (test) => {
    console.log("TEST: ", test && test.toLocaleTimeString());
  };

  const handlePassData = () => {
    console.log("TimingData: ", timingData);
    settingTheTime(timingData);
  };

  const handleOpenTimeChange = (day, newValue) => {
    // Update the state for the specific day's open time
    let openValue = newValue && newValue.toLocaleTimeString();

    setTimingData((prevTimingData) => ({
      ...prevTimingData,
      [day]: {
        ...prevTimingData[day],
        open: openValue,
      },
    }));
    handlePassData();
  };

  const handleCloseTimeChange = (day, newValue) => {
    // Update the state for the specific day's close time
    let closeValue = newValue && newValue.toLocaleTimeString();
    setTimingData((prevTimingData) => ({
      ...prevTimingData,
      [day]: { ...prevTimingData[day], close: closeValue },
    }));
    handlePassData();
  };

  const handleCheckboxChange = (day) => {
    // Toggle the disabled state for the specific day
    setTimingData((prevTimingData) => ({
      ...prevTimingData,
      [day]: {
        ...prevTimingData[day],
        disabled: !prevTimingData[day].disabled,
        open: null, // Reset the open time when disabling
        close: null, // Reset the close time when disabling
      },
    }));
  };

  var week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <Stack component="form" spacing={4} sx={{ width: "250px" }}>
      <Grid container spacing={5}>
        {week.map((day, index) => (
          <div key={index}>
            <Grid container alignItems="center">
              <Checkbox
                style={{
                  color: colors.blueAccent[400],
                }}
                checked={!timingData[day].disabled}
                onChange={() => handleCheckboxChange(day)}
              />
              <h4>{day}:</h4>
            </Grid>
            <Grid item xs={12} md={12}>
              <TimePicker
                label={`Open Time (${day})`}
                disabled={timingData[day].disabled}
                renderInput={(ot) => <TextField {...ot} autoComplete="off" />}
                color="success"
                value={timingData[day].open}
                onChange={(newValue) => handleOpenTimeChange(day, newValue)}
                // onChange={(test) => handleTest(test)}
                format="hh:mm a" // Set the format prop to "hh:mm a"
              />
            </Grid>
            <br />
            <Grid item xs={12} md={12}>
              <TimePicker
                label={`Close Time (${day})`}
                disabled={timingData[day].disabled}
                renderInput={(ct) => <TextField {...ct} autoComplete="off" />}
                color="success"
                value={timingData[day].close}
                onChange={(newValue) => handleCloseTimeChange(day, newValue)}
                format="hh:mm a" // Set the format prop to "hh:mm a"
              />
            </Grid>
          </div>
        ))}
      </Grid>
    </Stack>
  );
};

export default TimePickerComponent;

// import { Box, Grid, Stack, TextField, Checkbox, useTheme } from "@mui/material";
// import { DatePicker, TimePicker } from "@mui/lab";

// import React, { useState } from "react";
// import { tokens } from "../../theme";

// const TimePickerComponent = ({ settingTheTime }) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   // Define state variables for open and close times for each day
//   const [timingData, setTimingData] = useState({
//     Monday: { open: null, close: null, disabled: false },
//     Tuesday: { open: null, close: null, disabled: false },
//     Wednesday: { open: null, close: null, disabled: false },
//     Thursday: { open: null, close: null, disabled: false },
//     Friday: { open: null, close: null, disabled: false },
//     Saturday: { open: null, close: null, disabled: false },
//     Sunday: { open: null, close: null, disabled: false },
//   });

//   console.log("timingData: ", timingData);

//   const handlePassData = () => {
//     console.log("TimingData: ", timingData);
//     settingTheTime(timingData);
//   };

//   const handleOpenTimeChange = (day, newValue) => {
//     // Update the state for the specific day's open time
//     setTimingData((prevTimingData) => ({
//       ...prevTimingData,
//       [day]: { ...prevTimingData[day], open: newValue },
//     }));
//     handlePassData();
//   };

//   const handleCloseTimeChange = (day, newValue) => {
//     // Update the state for the specific day's close time
//     setTimingData((prevTimingData) => ({
//       ...prevTimingData,
//       [day]: { ...prevTimingData[day], close: newValue },
//     }));
//     handlePassData();
//   };

//   const handleCheckboxChange = (day) => {
//     // Toggle the disabled state for the specific day
//     setTimingData((prevTimingData) => ({
//       ...prevTimingData,
//       [day]: {
//         ...prevTimingData[day],
//         disabled: !prevTimingData[day].disabled,
//         open: null, // Reset the open time when disabling
//         close: null, // Reset the close time when disabling
//       },
//     }));
//   };

//   var week = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];

//   return (
//     <Stack component="form" spacing={4} sx={{ width: "250px" }}>
//       <Grid container spacing={5}>
//         {week.map((day, index) => (
//           <div key={index}>
//             <Grid container alignItems="center">
//               <Checkbox
//                 style={{
//                   color: colors.blueAccent[400],
//                 }}
//                 checked={!timingData[day].disabled}
//                 onChange={() => handleCheckboxChange(day)}
//               />
//               <h4>{day}:</h4>
//             </Grid>
//             <Grid item xs={12} md={12}>
//               <TimePicker
//                 label={`Open Time (${day})`}
//                 disabled={timingData[day].disabled}
//                 renderInput={(ot) => <TextField {...ot} autoComplete="off" />}
//                 color="success"
//                 value={timingData[day].open}
//                 onChange={(newValue) => handleOpenTimeChange(day, newValue)}
//               />
//             </Grid>
//             <br />
//             <Grid item xs={12} md={12}>
//               <TimePicker
//                 label={`Close Time (${day})`}
//                 disabled={timingData[day].disabled}
//                 renderInput={(ct) => <TextField {...ct} autoComplete="off" />}
//                 color="success"
//                 value={timingData[day].close}
//                 onChange={(newValue) => handleCloseTimeChange(day, newValue)}
//               />
//             </Grid>
//           </div>
//         ))}
//       </Grid>
//     </Stack>
//   );
// };

// export default TimePickerComponent;

// import { Box, Grid, Stack, TextField } from "@mui/material";
// import { DatePicker, TimePicker } from "@mui/lab";

// import React, { useState } from "react";

// const TimePickerComponent = () => {
//   // Define state variables for open and close times for each day
//   const [timingData, setTimingData] = useState({
//     Monday: { open: null, close: null },
//     Tuesday: { open: null, close: null },
//     Wednesday: { open: null, close: null },
//     Thursday: { open: null, close: null },
//     Friday: { open: null, close: null },
//     Saturday: { open: null, close: null },
//     Sunday: { open: null, close: null },
//   });

//   console.log("timingData: ", timingData);

//   const handleOpenTimeChange = (day, newValue) => {
//     // Update the state for the specific day's open time
//     setTimingData((prevTimingData) => ({
//       ...prevTimingData,
//       [day]: { ...prevTimingData[day], open: newValue },
//     }));
//   };

//   const handleCloseTimeChange = (day, newValue) => {
//     // Update the state for the specific day's close time
//     setTimingData((prevTimingData) => ({
//       ...prevTimingData,
//       [day]: { ...prevTimingData[day], close: newValue },
//     }));
//   };

//   var week = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];

//   return (
//     <Stack component="form" spacing={4} sx={{ width: "250px" }}>
//       <Grid container spacing={5}>
//         {week.map((day, index) => (
//           <div key={index}>
//             <h4>{day}:</h4>
//             <Grid item xs={12} md={12}>
//               <TimePicker
//                 label={`Open Time (${day})`}
//                 renderInput={(ot) => <TextField {...ot} autoComplete="off" />}
//                 value={timingData[day].open}
//                 onChange={(newValue) => handleOpenTimeChange(day, newValue)}
//               />
//             </Grid>
//             <br />
//             <Grid item xs={12} md={12}>
//               <TimePicker
//                 label={`Close Time (${day})`}
//                 renderInput={(ct) => <TextField {...ct} autoComplete="off" />}
//                 value={timingData[day].close}
//                 onChange={(newValue) => handleCloseTimeChange(day, newValue)}
//               />
//             </Grid>
//           </div>
//         ))}
//       </Grid>
//     </Stack>
//   );
// };

// export default TimePickerComponent;

// import { Box, Grid, Stack, TextField } from "@mui/material";
// import { DatePicker, TimePicker } from "@mui/lab";

// import React, { useState } from "react";

// const TimePickerComponent = () => {
//   const [openTime, setOpenTime] = useState(null);
//   const [closeTime, setCloseTime] = useState(null);

//   console.log("openTime: ", openTime);
//   console.log("closeTime: ", closeTime);

//   var timingData = [];

//   const handleOpenTimeChange = (event) => {
//     console.log("handleOpenTimeChange");
//     setOpenTime(event.target.value);
//   };

//   const handleCloseTimeChange = (event) => {
//     console.log("handleCloseTimeChange");
//     setCloseTime(event.target.value);
//   };

//   var week = [
//     "Monday",
//     "Tuesday",
//     "Wednessday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];

//   var arr = [];
//   console.log("Arrrrrray", typeof arr);
//   console.log("openTime: ", openTime);
//   console.log("closeTime: ", closeTime);
//   return (
//     <Stack component="form" spacing={4} sx={{ width: "250px" }}>
//       <Grid container spacing={5}>
//         {week.map((day, index) => (
//           <div key={index}>
//             <h1>{day}:</h1>
//             <Grid item sx={6} md={12}>
//               <TimePicker
//                 label={`Open Time (${day})`}
//                 renderInput={(ot) => <TextField {...ot} autoComplete="off" />}
//                 value={openTime}
//                 onChange={handleOpenTimeChange}
//               />
//             </Grid>
//             <br />
//             <Grid item sx={6} md={12}>
//               <TimePicker
//                 label={`Close Time (${day})`}
//                 renderInput={(ct) => <TextField {...ct} autoComplete="off" />}
//                 value={closeTime}
//                 onChange={handleCloseTimeChange}
//               />
//             </Grid>
//           </div>
//         ))}
//       </Grid>
//     </Stack>
//   );
// };

// export default TimePickerComponent;

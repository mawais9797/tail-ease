import { Box, Grid, Stack, TextField, Checkbox, useTheme } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/lab";

import React, { useState } from "react";
import { tokens } from "../../theme";

const TimePickerComponent = ({ settingTheTime }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Define state variables for open and close times for each day
  const [timingData, setTimingData] = useState({
    Monday: { open: null, close: null, disabled: false, day: "Monday" },
    Tuesday: { open: null, close: null, disabled: false, day: "Tuesday" },
    Wednesday: { open: null, close: null, disabled: false, day: "Wednessday" },
    Thursday: { open: null, close: null, disabled: false, day: "Thursday" },
    Friday: { open: null, close: null, disabled: false, day: "Friday" },
    Saturday: { open: null, close: null, disabled: true, day: "Saturday" },
    Sunday: { open: null, close: null, disabled: true, day: "Sunday" },
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

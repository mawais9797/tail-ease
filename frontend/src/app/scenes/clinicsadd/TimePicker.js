import { Box, Stack, TextField } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/lab";

import React, { useState } from "react";

const TimePickerComponent = () => {
  const [openTime, setOpenTime] = useState(null);
  const [closeTime, setCloseTime] = useState(null);

  console.log("openTime: ", openTime);
  console.log("closeTime: ", closeTime);

  var week = [
    "Monday",
    "Tuesday",
    "Wednessday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  var arr = [];
  console.log("Arrrrrray", typeof arr);
  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      {week.map((day, index) => (
        <div key={index}>
          <h1>Today is {day}</h1>
          <TimePicker
            label={`Open Time (${day})`}
            renderInput={(ot) => <TextField {...ot} />}
            value={openTime}
            onChange={(newValue) => setOpenTime(newValue)}
          />

          <TimePicker
            label={`Close Time (${day})`}
            renderInput={(ct) => <TextField {...ct} />}
            value={closeTime}
            onChange={(newValue) => setCloseTime(newValue)}
          />
        </div>
      ))}
      {/* <TimePicker
        label=" Open Time "
        renderInput={(ot) => <TextField {...ot} />}
        value={openTime}
        onChange={(newValue) => setOpenTime(newValue)}
      />

      <TimePicker
        label=" Close Time "
        renderInput={(ct) => <TextField {...ct} />}
        value={closeTime}
        onChange={(newValue) => setCloseTime(newValue)}
      /> */}

      {/* <TimePicker
        startText="Open"
        endText="Close"
        renderInput={(startProps, endProps) => {
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}>to</Box>
            <TextField {...endProps} />
          </>;
        }}
        value={selectedTime}
        onChange={(newValue) => setSelectedTime(newValue)}
      /> */}
    </Stack>
  );
};

export default TimePickerComponent;

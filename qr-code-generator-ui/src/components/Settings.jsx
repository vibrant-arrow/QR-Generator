import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {
  Slider,
  FormControl,
  FormControlLabel,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import ColorPicker from "./ColorPicker";
import "./settings.css";

function Settings(props) {
  const [dark, light] = [props.colorFncs[0], props.colorFncs[1]];

  const marginMarks = [
    { value: 0, label: "0" },
    { value: 10, label: "10" },
  ];

  const [url, setUrl] = useState("");
  function handleUrlChange(event) {
    setUrl(event.target.value);
    props.urlFnc(event.target.value);
  }

  const [sliderValue, setSliderValue] = useState(4);
  function handleSliderChange(event, newValue) {
    setSliderValue(newValue);
    props.sliderFnc(newValue);
  }

  return (
    <Paper elevation={10} className="settings">
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", marginBottom: "20px", textAlign: "center" }}
      >
        CONFIGURATION
      </Typography>
      <TextField label="URL" onChange={handleUrlChange} value={url}></TextField>

      <FormControl>
        <FormControlLabel
          control={
            <Slider
              id="margin"
              value={sliderValue}
              aria-label="Default"
              valueLabelDisplay="auto"
              marks={marginMarks}
              defaultValue={4}
              min={0}
              max={10}
              step={1}
              onChange={handleSliderChange}
            />
          }
          label="Margin"
          labelPlacement="top"
        >
          Margin
        </FormControlLabel>
      </FormControl>

      <div>
        <ColorPicker
          defaultValue="#000000"
          label="Foreground"
          colorFnc={dark}
        ></ColorPicker>
        <ColorPicker
          defaultValue="#ffffff"
          label="Background"
          colorFnc={light}
        ></ColorPicker>
      </div>
    </Paper>
  );
}

export default Settings;

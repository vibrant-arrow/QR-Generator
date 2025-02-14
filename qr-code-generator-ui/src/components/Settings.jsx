import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {
  Slider,
  FormControl,
  FormControlLabel,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import ColorPicker from "./ColorPicker";
import "./settings.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";

function Settings(props) {
  const [dark, light] = [props.colorFncs[0], props.colorFncs[1]];

  const marginMarks = [
    { value: 0, label: "0" },
    { value: 10, label: "10" },
  ];
  const [ecLevel, setECLevel] = useState("L");
  function handleLevelChange(event) {
    setECLevel(event.target.value);
    props.levelFnc(event.target.value);
  }

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

  const wideScreen = useMediaQuery("(min-width: 1100px)");
  const [value, setValue] = React.useState(0);

  return wideScreen ? (
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

      <FormControl>
        <InputLabel id="demo-simple-select-label">
          Error Correction Rate
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={ecLevel}
          label="Error Correction Rate"
          onChange={handleLevelChange}
        >
          <MenuItem value="L">Low</MenuItem>
          <MenuItem value="M">Medium</MenuItem>
          <MenuItem value="H">High</MenuItem>
        </Select>
      </FormControl>
    </Paper>
  ) : (
    <Paper>
      <div className={value === 0 ? "current-control" : "invisible"}>
        <TextField
          label="URL"
          onChange={handleUrlChange}
          value={url}
        ></TextField>
      </div>

      <div className={value === 1 ? "current-control" : "invisible"}>
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
      </div>

      <div className={value === 2 ? "current-control" : "invisible"}>
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

      <Paper elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="URL" />
          <BottomNavigationAction label="Margin" />
          <BottomNavigationAction label="Color" />
        </BottomNavigation>
      </Paper>
    </Paper>
  );
}

export default Settings;

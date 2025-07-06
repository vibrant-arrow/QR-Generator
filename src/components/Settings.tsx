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
import Button from "./Button.tsx";

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

  return (
    <div className="settings">
      <div className="buttons">
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </div>
      <div className="workarea"></div>
    </div>
  );
}

export default Settings;

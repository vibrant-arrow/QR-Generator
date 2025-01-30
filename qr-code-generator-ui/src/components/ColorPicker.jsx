import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";

function ColorPicker(props) {
  const { label, defaultValue } = props;
  const [color, setColor] = useState(defaultValue);

  function handleColorChange(event) {
    setColor(event.target.value);
    props.colorFnc(event.target.value);
  }

  return (
    <>
      <FormControlLabel
        label={label}
        labelPlacement="bottom"
        control={
          <input
            className="color-picker"
            type="color"
            id="favcolor"
            name="favcolor"
            value={color}
            onChange={handleColorChange}
          ></input>
        }
      ></FormControlLabel>
    </>
  );
}

export default ColorPicker;

import "./App.css";
import QRCode from "./components/QRCode";
import { Nav, NavDrawer, Footer, Links } from "./components/common/common";
import { useMediaQuery } from "@mui/material";
import Settings from "./components/Settings.tsx";
import { useState } from "react";
function App() {
  const matches = useMediaQuery("(min-width: 1100px)");

  //qrcode image configs
  // const { size, level } = props;
  const [ecLevel, setECLevel] = useState("L");
  function updateLevel(newLevel: string) {
    setECLevel(newLevel);
  }

  const [darkColor, setDarkColor] = useState("#000000");
  function updateDarkColor(newColor) {
    setDarkColor(newColor);
  }
  const [lightColor, setLightColor] = useState("#ffffff");
  function updateLightColor(newColor) {
    setLightColor(newColor);
  }
  const [value, setValue] = useState(
    "https://vibrant-arrow.pages.dev/motivation/"
  );
  function updateValue(newValue: string) {
    newValue
      ? setValue(newValue)
      : setValue("https://vibrant-arrow.pages.dev/motivation/");
  }
  const [margin, setMargin] = useState(4);
  function changeMargin(newMargin) {
    setMargin(newMargin);
  }

  const props = { value, darkColor, lightColor, margin, ecLevel };

  return (
    <div className="app">
      <div className="workspace">
        <Nav></Nav>
        <Settings
          colorFncs={[updateDarkColor, updateLightColor]}
          urlFnc={updateValue}
          sliderFnc={changeMargin}
          levelFnc={updateLevel}
        ></Settings>
      </div>

      <div className="preview-pane">
        <QRCode {...props}></QRCode>
      </div>

      <Links></Links>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;

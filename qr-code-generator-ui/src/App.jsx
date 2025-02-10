import "./App.css";
import QRCode from "./components/QRCode";
import { Nav, NavDrawer, Footer, Links } from "./components/common/common";
import useMediaQuery from "./useMediaQuery";
import Settings from "./components/Settings";
import { useState } from "react";
function App() {
  const matches = useMediaQuery("(min-width: 1100px)");

  //qrcode image configs
  // const { size, level } = props;
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
  function updateValue(newValue) {
    newValue
      ? setValue(newValue)
      : setValue("https://vibrant-arrow.pages.dev/motivation/");
  }
  const [margin, setMargin] = useState(4);

  function changeMargin(newMargin) {
    setMargin(newMargin);
  }

  const props = { value, darkColor, lightColor, margin };

  return (
    <>
      {matches ? (
        <>
          <Nav></Nav>
          <div className="workspace">
            <QRCode {...props}></QRCode>
            <Settings
              colorFncs={[updateDarkColor, updateLightColor]}
              urlFnc={updateValue}
              sliderFnc={changeMargin}
            ></Settings>
          </div>

          <Links></Links>
          <Footer></Footer>
        </>
      ) : (
        <>
          <NavDrawer></NavDrawer>
          <div className="workspace-col">
            <QRCode {...props}></QRCode>
            <Settings
              colorFncs={[updateDarkColor, updateLightColor]}
              urlFnc={updateValue}
              sliderFnc={changeMargin}
            ></Settings>
          </div>
        </>
      )}
    </>
  );
}

export default App;

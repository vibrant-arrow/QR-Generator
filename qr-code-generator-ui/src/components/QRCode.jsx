import React, { useState, useRef, useEffect } from "react";
import QRCode from "qrcode";
import Settings from "./Settings";

function QRCodeComponent(props) {
  const { size, level } = props;
  const canvasRef = useRef(null);
  const [downloadLink, setDownloadLink] = useState(null);

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
  const [margin, setMargin] = useState(4);

  function changeMargin(newMargin) {
    setMargin(newMargin);
  }

  function updateValue(newValue) {
    newValue
      ? setValue(newValue)
      : setValue("https://vibrant-arrow.pages.dev/motivation/");
  }

  useEffect(() => {
    if (value) {
      // Only generate if a value is provided
      QRCode.toCanvas(
        canvasRef.current,
        value,
        {
          width: size || 500, // Default size
          margin: margin, // Add margin around the QR Code
          color: {
            dark: darkColor, // Foreground color
            light: lightColor, // Background color
          },
          errorCorrectionLevel: level || "L", // Error correction level
        },
        (error) => {
          if (error) {
            console.error("Error generating QR code:", error);
          } else {
            const dataURL = canvasRef.current.toDataURL("image/png"); // or 'image/jpeg'
            setDownloadLink(dataURL);
          }
        }
      );
    }
  }, [value, size, level, darkColor, lightColor, margin]); // Re-render when these props change

  return (
    <div className="workspace">
      <div className="qr-code">
        <a href={downloadLink} download="qrcode.png">
          <canvas ref={canvasRef} />
        </a>
        <p>Click on the image to download</p>
      </div>

      <Settings
        colorFncs={[updateDarkColor, updateLightColor]}
        urlFnc={updateValue}
        sliderFnc={changeMargin}
      ></Settings>
    </div>
  );
}

export default QRCodeComponent;

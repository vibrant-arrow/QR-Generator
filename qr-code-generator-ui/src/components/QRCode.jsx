import React, { useState, useRef, useEffect } from "react";
import QRCode from "qrcode";
import Settings from "./Settings";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useMediaQuery } from "@mui/material";
function QRCodeComponent({ value, darkColor, lightColor, margin }) {
  const wideScreen = useMediaQuery("(min-width: 1100px)");
  const [containerWidth, setContainerWidth] = useState(0);
  const canvasRef = useRef(null);
  const downloadRef = useRef(null);
  const [downloadLink, setDownloadLink] = useState(null);

  useEffect(() => {
    // Get the width of the container element.  This assumes your canvas is inside a div or other container.
    function handleResize() {
      if (canvasRef.current && canvasRef.current.parentNode) {
        setContainerWidth(canvasRef.current.parentNode.offsetWidth);
      }
    }

    handleResize(); // Initial measurement
    window.addEventListener("resize", handleResize); // Update on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up
    };
  }, []);

  useEffect(() => {
    if (value) {
      // for display
      QRCode.toCanvas(
        canvasRef.current,
        value,
        {
          width: containerWidth, // Default size
          margin: margin, // Add margin around the QR Code
          color: {
            dark: darkColor, // Foreground color
            light: lightColor, // Background color
          },
          errorCorrectionLevel: "H", // Error correction level
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

      //for download
      QRCode.toCanvas(
        downloadRef.current,
        value,
        {
          width: 500, // Default size
          margin: margin, // Add margin around the QR Code
          color: {
            dark: darkColor, // Foreground color
            light: lightColor, // Background color
          },
          errorCorrectionLevel: "H", // Error correction level
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
  }, [containerWidth, value, darkColor, lightColor, margin]); // Re-render when these props change

  return (
    <div className={wideScreen ? "output-container" : "output-container-col"}>
      <div className="qr-code">
        <a href={downloadLink} download="qrcode.png">
          {" "}
          {/* Transparent overlay */}
          <canvas ref={canvasRef} />
          <canvas ref={downloadRef} style={{ display: "none" }} />
        </a>
        <div className="info">
          <InfoOutlinedIcon /> <span>Click QR Code to download</span>
        </div>
      </div>
    </div>
  );
}

export default QRCodeComponent;

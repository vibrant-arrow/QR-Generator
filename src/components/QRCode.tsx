import { useState, useRef, useEffect } from "react";
import QRCode from "qrcode";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useMediaQuery } from "@mui/material";

function QRCodeComponent({ value, darkColor, lightColor, margin, ecLevel }) {
  const wideScreen = useMediaQuery("(min-width: 1100px)");
  const [containerWidth, setContainerWidth] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const downloadRef = useRef(null);
  const [downloadLink, setDownloadLink] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    // Get the width of the container element.  This assumes your canvas is inside a div or other container.
    function handleResize() {
      if (canvasRef.current && canvasRef.current.parentNode) {
        setContainerWidth(
          (canvasRef.current.parentNode as HTMLElement).offsetWidth
        );
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
          errorCorrectionLevel: ecLevel, // Error correction level
        },
        (error: Error) => {
          if (!canvasRef.current) {
            console.error("Error generating QR code:", error);
            return;
          }
          const dataURL: string = canvasRef.current.toDataURL("image/png"); // or 'image/jpeg'
          setDownloadLink(dataURL);
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
          errorCorrectionLevel: ecLevel, // Error correction level
        },
        (error: Error) => {
          if (!canvasRef.current) {
            console.error("Error generating QR code:", error);
            return;
          }
          const dataURL: string = canvasRef.current.toDataURL("image/png"); // or 'image/jpeg'
          setDownloadLink(dataURL);
        }
      );

      const lorem = "lorem";
    }
  }, [containerWidth, value, darkColor, lightColor, margin, ecLevel]); // Re-render when these props change

  return (
    <div className={wideScreen ? "output-container" : "output-container-col"}>
      <div className="qr-code">
        <a href={downloadLink} download="qrcode.png">
          {" "}
          {/* Transparent overlay */}
          <canvas ref={canvasRef} />
          <canvas ref={downloadRef} style={{ display: "none" }} />
        </a>
      </div>
    </div>
  );
}

export default QRCodeComponent;

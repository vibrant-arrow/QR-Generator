import { useState, useRef, useEffect } from "react";
import QRCode from "qrcode";

type props = {
  value: string;
  logo: string;
};

export default function QRImage({ value, logo }: props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [containerWidth, setContainerWidth] = useState(0);
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
    QRCode.toCanvas(
      canvasRef.current,
      value, //Value
      {
        width: containerWidth,
        margin: 0, // Add margin around the QR Code
        color: {
          dark: "#000000", // Foreground color
          light: "#f1f8fc", // Background color
        },
        errorCorrectionLevel: "M", // Error correction level
      }
    );
  }, [value, containerWidth]);

  return (
    <div className="qr-code">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <canvas ref={canvasRef} />
    </div>
  );
}

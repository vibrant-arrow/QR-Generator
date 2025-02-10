import React from "react";
import "./common.css";
import useMediaQuery from "@mui/material/useMediaQuery";
function Footer() {
  const year = new Date().getFullYear();
  const matches = useMediaQuery("(min-width: 1100px)");
  return (
    <div className={matches ? "footer" : "footer white"}>
      <p>Copyright © {year} | Vibrant Arrow</p>
    </div>
  );
}

export default Footer;

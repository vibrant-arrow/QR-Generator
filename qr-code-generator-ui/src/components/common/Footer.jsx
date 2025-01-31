import React from "react";
import "./common.css";
function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <p>Copyright © {year} | Vibrant Arrow</p>
    </div>
  );
}

export default Footer;

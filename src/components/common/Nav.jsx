import React from "react";
import qricon from "../../assets/qr-code-svgrepo-com.svg";

function Nav() {
  return (
    <div className="nav">
      <div className="brand">
        <img src={qricon} alt="" />
        <div className="title">
          <span>QR Code Generator</span>
          <span>vibrant-arrow.org</span>
        </div>
      </div>
    </div>
  );
}

export default Nav;

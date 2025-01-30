import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright © {year} | Vibrant Arrow</p>
    </footer>
  );
}

export default Footer;

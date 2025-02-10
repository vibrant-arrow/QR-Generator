import * as React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Links from "./Links";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import "./common.css";

export default function NavDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <div className="side-nav-btn">
        <Button onClick={toggleDrawer(true)}>
          <ArrowForwardIosRoundedIcon />
        </Button>
      </div>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <div className="side-nav">
          <Nav></Nav>
          <div>
            <Links></Links>
            <Footer />
          </div>
        </div>
      </Drawer>
    </div>
  );
}

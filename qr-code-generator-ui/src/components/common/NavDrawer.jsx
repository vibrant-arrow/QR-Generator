import * as React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Links from "./Links";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import "./common.css";

export default function NavDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
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

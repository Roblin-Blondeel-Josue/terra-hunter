import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

export default function MenuBar() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const linkStyle = {
    textDecoration: "none",
    fontSize: "1.5rem",
    color: "white",
    padding: "2rem 1rem 2rem",
  };
  const list = (anchor) => (
    <Box
      sx={{ width: 250, display: "flex", flexDirection: "column" }}
      role="menu"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Link style={linkStyle} to="/">
        Home
      </Link>
      <Link style={linkStyle} to="/zodiacs">
        Les Zodiacs
      </Link>
      <Link style={linkStyle} to="/infos">
        Informations
      </Link>
      <Link style={linkStyle} to="/signalement">
        Signalement
      </Link>
    </Box>
  );

  return (
    <div style={{ display: "flex" }}>
      <React.Fragment key="right">
        <Button
          sx={{ color: "white", padding: 0 }}
          onClick={toggleDrawer("right", true)}
        >
          <MenuIcon />
        </Button>
        <Drawer
          anchor="right"
          open={state.right}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

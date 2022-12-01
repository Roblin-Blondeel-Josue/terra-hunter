import * as React from "react";
import { Link } from "react-router-dom";
import { Box, Drawer, Button, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function MenuBar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
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
  const linkStyleMD = {
    textDecoration: "none",
    paddingRight: "1rem",
    fontSize: "1.5rem",
    color: "white",
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
      {matches ? (
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
      ) : (
        <div
          style={{
            display: "flex",
          }}
        >
          <Link style={linkStyleMD} to="/">
            Home
          </Link>
          <Link style={linkStyleMD} to="/zodiacs">
            Les Zodiacs
          </Link>
          <Link style={linkStyleMD} to="/infos">
            Informations
          </Link>
          <Link style={linkStyleMD} to="/signalement">
            Signalement
          </Link>
        </div>
      )}
    </div>
  );
}

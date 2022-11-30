import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FlareSharpIcon from "@mui/icons-material/FlareSharp";
import HomeIcon from "@mui/icons-material/Home";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import InfoIcon from "@mui/icons-material/Info";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1, widht: "100vh" }}>
      <AppBar position="static">
        <Typography
          variant="h2"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FlareSharpIcon fontSize="Large" /> Association des Hunters d'Europe
          <FlareSharpIcon fontSize="Large" />{" "}
        </Typography>
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-around",
            fontSize: "1.5rem",
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
            }}
            to="/"
          >
            <HomeIcon />
            Home
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
            }}
            to="/zodiacs"
          >
            <StarBorderPurple500Icon />
            Les Zodiacs
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
            }}
            to="/infos"
          >
            <InfoIcon />
            Informations
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
            }}
            to="/signalement"
          >
            <AddAlertIcon />
            Signalement
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

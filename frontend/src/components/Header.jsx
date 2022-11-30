import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import MenuBar from "./NavBar";

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        widht: "100vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Typography
          variant="h3"
          align="flex-start"
          sx={{ paddingLeft: "1rem" }}
        >
          Association des Hunters d'Europe
        </Typography>
      </Link>
      <MenuBar />
    </AppBar>
  );
}

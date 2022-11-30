import { Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import React from "react";

export default function Footer() {
  return (
    <Typography
      variant="body2"
      sx={{
        padding: "1rem 0rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ArrowRightIcon />
      Terra Hunter est la propriété intellectuelle de Black. Les oeuvres sont
      les propriétés de leurs auteurs respectifs. Ne pas reproduire sans accord
      <ArrowLeftIcon />
    </Typography>
  );
}

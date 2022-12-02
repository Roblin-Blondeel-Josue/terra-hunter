import React from "react";
import { PropTypes } from "prop-types";
import { Button, Typography, Popper, Box } from "@mui/material";

export default function LevelBar({ indice }) {
  const alertLevels = [
    {
      name: "Bleu",
      style: { padding: "0.5rem", color: "#7AA5FF" },
      info: "Pas de monstres proches",
    },
    {
      name: "Vert",
      style: { padding: "0.5rem", color: "#5AC150" },
      info: "Attention: Présence de Monstre Rang D/C. Enfermez vous",
    },
    {
      name: "Jaune",
      style: { padding: "0.5rem", color: "#FFFF00" },
      info: "Attention: Présence de Monstre Rang B. Rendez vous à l'abri de quartier.",
    },
    {
      name: "Orange",
      style: { padding: "0.5rem", color: "#EF6715" },
      info: "Attention: Présence de Monstre Rang A. Suivez les instructions des secours",
    },
    {
      name: "Rouge",
      style: { padding: "0.5rem", color: "#BE3C00" },
      info: "Attention: Présence de Monstre Rang S. Loi martial. Obéissez aux Hunters",
    },
    {
      name: "Violet",
      style: {
        padding: "0.5rem",
        backgroundColor: "#B94786",
        border: "2px solid #FFE4FA",
        color: "#FFE4FA",
      },
      info: "Intervention des Zodiacs. Fuyez la zone et priez !!!!",
    },
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <Button
        variant="text"
        onClick={handleClick}
        sx={alertLevels[indice].style}
        style={{ borderRadius: 0, marginTop: "0.5rem" }}
      >
        <Typography variant="h4">
          Niveau d'alerte de votre zone: {alertLevels[indice].name}
        </Typography>
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl} placement="right">
        <Box sx={{ p: 1, bgcolor: "inherit" }}>{alertLevels[indice].info}</Box>
      </Popper>
    </div>
  );
}
LevelBar.propTypes = {
  indice: PropTypes.isRequired,
};

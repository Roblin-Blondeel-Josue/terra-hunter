import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import NewsCard from "../components/NewsCard";
import LevelBar from "../components/LevelBar";

function HomePage() {
  const [indice, setindice] = React.useState("0");
  function handleIndice(event) {
    setindice(event.target.value);
  }

  return (
    <div
      sx={{
        width: "100%",
        bgcolor: "background.paper",
      }}
    >
      <LevelBar indice={indice} />
      <FormControl
        sx={{ m: 1, minWidth: 120 }}
        size="small"
        style={{ backgroundColor: "inherit" }}
        variant="outlined"
      >
        <InputLabel id="indice-value">Indice</InputLabel>
        <Select
          labelId="indice-value"
          id="filter"
          value={indice}
          label="Categorie"
          onChange={(e) => handleIndice(e)}
          style={{ minHeight: "36px" }}
        >
          <MenuItem value="0">Blue</MenuItem>
          <MenuItem value="1">Vert</MenuItem>
          <MenuItem value="2">Jaune</MenuItem>
          <MenuItem value="3">Orange</MenuItem>
          <MenuItem value="4">Rouge</MenuItem>
          <MenuItem value="5">Violet</MenuItem>
        </Select>
      </FormControl>
      <NewsCard />
    </div>
  );
}

export default HomePage;

import React from "react";
import { Typography } from "@mui/material";
import NewsCard from "../components/NewsCard";

function HomePage() {
  return (
    <div
      sx={{
        width: "100%",
        bgcolor: "background.paper",
      }}
    >
      <Typography variant="h4" align="center" sx={{ padding: "1rem" }}>
        Les actualités des Hunters
      </Typography>
      <NewsCard />
    </div>
  );
}

export default HomePage;

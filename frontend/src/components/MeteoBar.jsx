import React from "react";
import { Typography, Skeleton } from "@mui/material";
import GetLocalMeteo from "../services/LocalMeteo";

function LocalMeteo() {
  const [localMeteo, setLocalMeteo] = React.useState();
  React.useEffect(() => {
    GetLocalMeteo().then((response) => {
      setLocalMeteo(response);
    });
  }, []);
  return localMeteo;
}

export default function MeteoBar() {
  const meteo = LocalMeteo();
  return (
    <Typography variant="h5" align="center" sx={{ marging: "1rem" }}>
      Météo locale:
      {meteo || <Skeleton variant="rounded" widht="5vw" height="2rem" />}
    </Typography>
  );
}

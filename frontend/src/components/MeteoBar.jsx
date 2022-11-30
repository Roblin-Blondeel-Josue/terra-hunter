import React from "react";
import { Typography, Skeleton } from "@mui/material";
import GetLocalMeteo from "../services/LocalMeteo";
import GetLocalCity from "../services/LocalCity";

function LocalMeteo() {
  const [localMeteo, setLocalMeteo] = React.useState();
  React.useEffect(() => {
    GetLocalMeteo().then((response) => {
      setLocalMeteo(response);
    });
  }, []);
  return localMeteo;
}
function LocalCity() {
  const [localCity, setLocalCity] = React.useState();
  React.useEffect(() => {
    GetLocalCity().then((response) => {
      setLocalCity(response);
    });
  }, []);
  return localCity;
}

export default function MeteoBar() {
  const meteo = LocalMeteo();
  const city = LocalCity();
  return (
    <Typography variant="h5" align="center" sx={{ marging: "1rem" }}>
      Météo locale :{" "}
      {meteo || <Skeleton variant="rounded" widht="3vw" height="2rem" />} (
      {city || <Skeleton variant="rounded" widht="3vw" height="2rem" />})
    </Typography>
  );
}

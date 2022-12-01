import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  useTheme,
  Button,
  Stack,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Slide from "@mui/material/Slide";
import MeteoBar from "./MeteoBar";
import InterviewModal from "./ModalInterview";
import NewSecond from "./NewsSecond";

const cardStyleMd = {
  width: "40vw",
  height: "80vh",
  boxShadow: 5,
  borderRadius: "5px",
  background:
    "radial-gradient(circle, #5f1e00, #52121c, #391325, #1f1420, #0d0d0d)",
};
const cardStyleXS = {
  width: "90vw",
  height: "70vh",
  marginBottom: "2rem",
  boxShadow: 5,
  borderRadius: "5px",
  overflowY: "scroll",
  background:
    "radial-gradient(circle, #5f1e00, #52121c, #391325, #1f1420, #0d0d0d)",
};

export default function NewsCard() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [checked, setChecked] = React.useState(false);
  const containerRef = React.useRef(null);
  const NewsPrincipal = (
    <Card sx={matches ? cardStyleXS : cardStyleMd}>
      <CardHeader
        align="center"
        sx={{ bgcolor: "primary.main", padding: "0.5rem 0rem" }}
        title={<Typography variant="h6">Actualité Principale</Typography>}
      />
      <CardMedia
        component="img"
        height="60%"
        image="https://cdn.discordapp.com/attachments/753953581027033158/1047157576816672818/1.png"
        alt="Zodiac Nayden"
      />
      <CardContent>
        <Typography variant="h6" style={{ borderBottom: "2px solid #FAF7FF" }}>
          Nayden "Dukh" Pokrovs
        </Typography>
        <Typography variant="body1">
          Voici le nom qui est dans toutes les bouches. Le mage alchimiste est
          le nouveau Zodiaque du poisson. Il a bien voulu répondre à nos
          journalistes.
          <InterviewModal />
        </Typography>
      </CardContent>
    </Card>
  );
  const NewSecondary = (
    <Card sx={matches ? cardStyleXS : cardStyleMd}>
      <CardHeader
        align="center"
        sx={{ bgcolor: "primary.main", padding: "0.5rem 0rem" }}
        title={
          <Typography variant="h6" align="center">
            Les autres Actualités
          </Typography>
        }
      />
      <CardContent>
        <MeteoBar />
        <NewSecond />
      </CardContent>
    </Card>
  );
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Stack
      className="News"
      direction={{ sm: "column", md: "row" }}
      spacing="20vh"
      sx={{ marginLeft: "5vw", marginRight: "5vw", widht: "auto" }}
    >
      <Slide
        direction="right"
        in={checked}
        container={containerRef.current}
        timeout={500}
      >
        {NewsPrincipal}
      </Slide>
      <Button
        onClick={handleChange}
        variant="text"
        sx={!checked ? { display: "flex" } : { display: "none" }}
      >
        <Typography variant="h2" sx={{ color: "text.secondary" }}>
          Bienvenue
        </Typography>
      </Button>
      <Slide direction="left" in={checked} container={containerRef.current}>
        {NewSecondary}
      </Slide>
    </Stack>
  );
}

import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  ListItemIcon,
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  useTheme,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import MeteoBar from "../components/MeteoBar";
import InterviewModal from "../components/ModalInterview";
import news from "../data/news.json";

function HomePage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const nouvelle = news.data;
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
    background:
      "radial-gradient(circle, #5f1e00, #52121c, #391325, #1f1420, #0d0d0d)",
  };
  return (
    <div
      sx={{
        width: "90vw",
        bgcolor: "background.paper",
        marginLeft: "5vw",
      }}
      style={{
        minWidth: "90vw",
      }}
    >
      <Typography variant="h4" align="center" sx={{ padding: "1rem" }}>
        Les actualités des Hunters
      </Typography>
      <Stack
        className="Home"
        direction={{ sm: "column", md: "row" }}
        spacing="20vh"
        sx={{ marginLeft: "5vw", marginRight: "5vw", widht: "auto" }}
      >
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
            <Typography
              variant="h6"
              style={{ borderBottom: "2px solid #FAF7FF" }}
            >
              Nayden "Dukh" Pokrovs
            </Typography>
            <Typography variant="body1">
              Voici le nom qui est dans toutes les bouches. Le mage alchimiste
              est le nouveau Zodiaque du poisson. Il a bien voulu répondre à nos
              journalistes.
              <InterviewModal />
            </Typography>
          </CardContent>
        </Card>
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
          <CardContent style={{ overflowY: "scroll" }}>
            <MeteoBar />
            <List>
              {nouvelle.map((element) => {
                return (
                  <ListItem>
                    <ListItemIcon>
                      <DoubleArrowIcon
                        sx={{ color: "text.primary", fontSize: "2rem" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="h6">{element.titre}</Typography>
                      }
                      secondary={element.informations}
                    />
                  </ListItem>
                );
              })}
            </List>
          </CardContent>
        </Card>
      </Stack>
    </div>
  );
}

export default HomePage;

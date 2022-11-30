import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  ListItemIcon,
  CardMedia,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CelebrationIcon from "@mui/icons-material/Celebration";
import GradeIcon from "@mui/icons-material/Grade";
import MeteoBar from "../components/MeteoBar";
import news from "../data/news.json";

function HomePage() {
  const nouvelle = news.data;
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
      <Typography variant="h3" align="center" sx={{ padding: "1rem" }}>
        Les actualités des Hunters
      </Typography>
      <Stack
        className="Home"
        direction="row"
        spacing={2}
        sx={{ marginLeft: "5vw", marginRight: "5vw", widht: "auto" }}
      >
        <Card sx={{ width: "40vw", height: "80vh" }}>
          <CardHeader
            align="center"
            title={
              <Typography
                variant="h4"
                sx={{ bgcolor: "primary.dark", color: "white", widht: "100%" }}
              >
                {" "}
                Actualité Principale
              </Typography>
            }
          />
          <CardMedia
            component="img"
            height="60%"
            image="./nayden.png"
            alt="Zodiac Nayden"
          />
          <CardContent>
            <Typography variant="h6">Nayden Pokrovs</Typography>
            <Typography variant="body1">
              Voici le nom qui est dans toutes les bouches. Le mage alchimiste
              est le nouveau Zodiaque du poisson[...]
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: "45vw" }}>
          <CardHeader
            align="center"
            title={
              <Typography
                variant="h4"
                align="center"
                sx={{ bgcolor: "primary.dark", color: "white" }}
              >
                Les autres Actualités
              </Typography>
            }
          />
          <CardContent>
            <MeteoBar />
            <List>
              {nouvelle.map((element) => {
                return (
                  <ListItem>
                    <ListItemIcon>
                      {element.icon ? (
                        <CelebrationIcon fontSize="large" />
                      ) : (
                        <GradeIcon fontSize="large" />
                      )}
                    </ListItemIcon>
                    <ListItemText
                      primary={element.titre}
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

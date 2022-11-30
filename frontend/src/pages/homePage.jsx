import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  Avatar,
  ListItemAvatar,
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  useTheme,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import MeteoBar from "../components/MeteoBar";
import news from "../data/news.json";

function HomePage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const nouvelle = news.data;
  const cardStyleMd = { width: "40vw", height: "80vh" };
  const cardStyleXS = { width: "90vw", height: "100vh", marginBottom: "2rem" };
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
        direction={{ sm: "column", md: "row" }}
        spacing={2}
        sx={{ marginLeft: "5vw", marginRight: "5vw", widht: "auto" }}
      >
        <Card sx={matches ? cardStyleXS : cardStyleMd}>
          <CardHeader
            align="center"
            sx={{ bgcolor: "primary.main", padding: "1rem 0rem" }}
            title={<Typography variant="h4">Actualité Principale</Typography>}
          />
          <CardMedia
            component="img"
            height="60%"
            image="./png/nayden.png"
            alt="Zodiac Nayden"
          />
          <CardContent>
            <Typography
              variant="h5"
              style={{ borderBottom: "2px solid #FAF7FF" }}
            >
              Nayden Pokrovs
            </Typography>
            <Typography variant="body1">
              Voici le nom qui est dans toutes les bouches. Le mage alchimiste
              est le nouveau Zodiaque du poisson. Decouvrez son interview ici.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={matches ? cardStyleXS : cardStyleMd}>
          <CardHeader
            align="center"
            sx={{ bgcolor: "primary.main", padding: "1rem 0rem" }}
            title={
              <Typography variant="h4" align="center">
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
                    <ListItemAvatar>
                      <Avatar
                        alt="arrow"
                        src="./png/iconfutur.png"
                        style={{ backgroundColor: "#FAF7FF" }}
                      />
                    </ListItemAvatar>
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

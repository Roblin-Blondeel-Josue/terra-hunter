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
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MeteoBar from "../components/MeteoBar";
import InterviewModal from "../components/ModalInterview";
import news from "../data/news.json";

function HomePage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const nouvelle = news.data;
  const cardStyleMd = { width: "50vw", height: "auto" };
  const cardStyleXS = { width: "90vw", height: "auto", marginBottom: "2rem" };
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
        spacing={2}
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
            image="./nayden.png"
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
              est le nouveau Zodiaque du poisson.
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
          <CardContent>
            <MeteoBar />
            <List>
              {nouvelle.map((element) => {
                return (
                  <ListItem>
                    <ListItemIcon>
                      <PlayArrowIcon
                        fontSize="Large"
                        sx={{ color: "inherit" }}
                      />
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

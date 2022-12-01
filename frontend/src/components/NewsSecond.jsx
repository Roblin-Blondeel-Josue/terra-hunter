import React from "react";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import news from "../data/news.json";

export default function NewSecond() {
  const nouvelle = news.data;
  return (
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
              primary={element.titre}
              secondary={element.informations}
            />
          </ListItem>
        );
      })}
    </List>
  );
}

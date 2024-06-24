import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Grid, Link, Typography } from "@mui/material";
import { Copyright } from "@mui/icons-material";

export default function BasicList() {
  return (
    <Box height={"270px"} sx={{ width: "100%", bgcolor: "background.paper" }} component={"footer"}>
      <Divider />
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <img src="src/assets/images/Lupas.jpeg"></img>
        </Grid>
        <Grid item xs={8} container justifyContent="center" alignItems="center">
          <Typography variant="body2" color="textSecondary" align="center">
            <Copyright fontSize="small" /> {new Date().getFullYear()} ATS AyGeYeBe. All rights reserved.
          </Typography>
        </Grid>
        <Grid item xs={2} justifyContent="flex-end">
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <GitHubIcon />
                  </ListItemIcon>
                  <Link
                    href="https://github.com/AytamiEugRod"
                    underline="none"
                    color="inherit"
                    fontFamily={"Roboto"}
                  >
                    {"Aytami Eugenio"}
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <GitHubIcon />
                  </ListItemIcon>
                  <Link
                    href="https://github.com/gemaencabo"
                    underline="none"
                    color="inherit"
                    fontFamily={"Roboto"}
                  >
                    {"Gema Encabo"}
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <GitHubIcon />
                  </ListItemIcon>
                  <Link
                    href="https://github.com/yeraki"
                    underline="none"
                    color="inherit"
                    fontFamily={"Roboto"}
                  >
                    {"Yeray Sánchez"}
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <GitHubIcon />
                  </ListItemIcon>
                  <Link
                    href="https://github.com/BeneharoFranco"
                    underline="none"
                    color="inherit"
                    fontFamily={"Roboto"}
                  >
                    {"Beneharo Franco"}
                  </Link>
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Grid>
      </Grid>
      <Divider />
    </Box>
  );
}

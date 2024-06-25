import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Grid, Link, Typography } from "@mui/material";
import { Copyright } from "@mui/icons-material";
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function BasicList() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ width: "100%", bgcolor: defaultTheme.palette.primary.main, color: "white", padding: "10px" }} component={"footer"}>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} container justifyContent="center" alignItems="center">
            <Typography variant="body2" align="center" fontSize="small" sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Copyright fontSize="small" sx={{ marginRight: "5px" }} /> {new Date().getFullYear()} ATS. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} container justifyContent="center" alignItems="center">
            <nav aria-label="main mailbox folders">
              <List sx={{ display: "flex", justifyContent: "center", padding: 0 }}>
                <ListItem disablePadding sx={{ width: "auto", margin: "0 10px" }}>
                  <ListItemButton sx={{ padding: 0 }}>
                    <ListItemIcon sx={{ minWidth: "auto", marginRight: "5px" }}>
                      <GitHubIcon fontSize="small" sx={{ color: "white" }} />
                    </ListItemIcon>
                    <Link
                      href="https://github.com/AytamiEugRod"
                      underline="none"
                      color="inherit"
                      fontFamily={"Roboto"}
                      fontSize="small"
                    >
                      {"Aytami Eugenio"}
                    </Link>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ width: "auto", margin: "0 10px" }}>
                  <ListItemButton sx={{ padding: 0 }}>
                    <ListItemIcon sx={{ minWidth: "auto", marginRight: "5px" }}>
                      <GitHubIcon fontSize="small" sx={{ color: "white" }} />
                    </ListItemIcon>
                    <Link
                      href="https://github.com/gemaencabo"
                      underline="none"
                      color="inherit"
                      fontFamily={"Roboto"}
                      fontSize="small"
                    >
                      {"Gema Encabo"}
                    </Link>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ width: "auto", margin: "0 10px" }}>
                  <ListItemButton sx={{ padding: 0 }}>
                    <ListItemIcon sx={{ minWidth: "auto", marginRight: "5px" }}>
                      <GitHubIcon fontSize="small" sx={{ color: "white" }} />
                    </ListItemIcon>
                    <Link
                      href="https://github.com/yeraki"
                      underline="none"
                      color="inherit"
                      fontFamily={"Roboto"}
                      fontSize="small"
                    >
                      {"Yeray Sánchez"}
                    </Link>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ width: "auto", margin: "0 10px" }}>
                  <ListItemButton sx={{ padding: 0 }}>
                    <ListItemIcon sx={{ minWidth: "auto", marginRight: "5px" }}>
                      <GitHubIcon fontSize="small" sx={{ color: "white" }} />
                    </ListItemIcon>
                    <Link
                      href="https://github.com/BeneharoFranco"
                      underline="none"
                      color="inherit"
                      fontFamily={"Roboto"}
                      fontSize="small"
                    >
                      {"Beneharo Franco"}
                    </Link>
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

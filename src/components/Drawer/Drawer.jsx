// import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Divider, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const CustomDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const Drawer = ({open, toggleDrawer, pages}) => {
  return (
    <>
      <CustomDrawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          {pages.map((page) => {
            return (
              <>
                <ListItemButton component={Link} to={page.path}>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary={page.name} />
                </ListItemButton>
              </>
            );
          })}
        </List>
      </CustomDrawer>
    </>
  );
};

Drawer.propTypes = {
    open: PropTypes.bool,
    toggleDrawer: PropTypes.func,
    pages: PropTypes.object,
  };

export default Drawer;

import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Box, Container, CssBaseline, Divider, Grid, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";

// import { styled } from "@mui/material/styles";
// import MuiDrawer from '@mui/material/Drawer';
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import DashboardIcon from "@mui/icons-material/Dashboard";
import { ThemeProvider } from "@emotion/react";
import { createTheme} from '@mui/material/styles';
import Drawer from "../components/Drawer/Drawer";

// const drawerWidth = 240;

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open", })(({ theme, open }) => ({
//   "& .MuiDrawer-paper": {
//     position: "relative",
//     whiteSpace: "nowrap",
//     width: drawerWidth,
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     boxSizing: "border-box",
//     ...(!open && {
//       overflowX: "hidden",
//       transition: theme.transitions.create("width", {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//       width: theme.spacing(7),
//       [theme.breakpoints.up("sm")]: {
//         width: theme.spacing(9),
//       },
//     }),
//   },
// }));

const pages = [
  { name: "Home", path: "/Home" },
  // {name: "About us", path: "/about" , image: logo},
  { name: "Candidates", path: "/candidates" },
  { name: "Jobs", path: "/JobOpening" },
  { name: "Users", path: "/User" },
];

const defaultTheme = createTheme();

const Root = ({ children }) => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Header key={"header"} open={open} toggleDrawer={toggleDrawer} pages={pages}/>

          {/* <Drawer variant="permanent" open={open}>
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
          </Drawer> */}
          <Drawer key={"drawer"} open={open} toggleDrawer={toggleDrawer} pages={pages}/>

          <Box
            component="main"
            sx={{ flexGrow: 1, flexDirection: "column", height: "100vh", overflow: "auto" }}
          >
            {/* <Toolbar /> */}
            {/* <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}> */}
            <Container sx={{ mt: 12, mb: 4 }}>
              <Grid container>{children ?? <Outlet />}</Grid>
            </Container>
            {/* <Footer key={"footer"} /> */}
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Root;

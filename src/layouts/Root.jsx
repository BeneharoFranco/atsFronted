import { useState } from "react";
import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";
import { Box, Container, CssBaseline, Grid, Toolbar } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { createTheme} from '@mui/material/styles';
import Drawer from "../components/Drawer/Drawer";
import { Outlet } from "react-router-dom";

import GroupIcon from '@mui/icons-material/Group';
import ApartmentIcon from '@mui/icons-material/Apartment';
import WorkIcon from '@mui/icons-material/Work';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

let pages = [];

const pagesAdmin = [
  // { name: "Home", path: "/Home" },
  { name: "Candidates", path: "/Gestion/Candidate", icon: <GroupIcon sx={{ color: "#fff" }} /> },
  { name: "Jobs", path: "/Gestion/JobOpening", icon: <WorkIcon sx={{ color: "#fff" }} /> },
  { name: "Users", path: "/Gestion/User", icon: <ManageAccountsIcon sx={{ color: "#fff" }} /> },
  { name: "Company", path: "/Gestion/Company", icon: <ApartmentIcon sx={{ color: "#fff" }} /> },
];

const pagesRecruiter = [
  // { name: "Home", path: "/Home" },
  { name: "Candidates", path: "/Gestion/Candidate", icon: <GroupIcon sx={{ color: "#fff" }} /> },
  { name: "Jobs", path: "/Gestion/JobOpening", icon: <WorkIcon sx={{ color: "#fff" }} /> },
];

// const pages = [
//   { name: "Home", path: "/Home" },
//   // {name: "About us", path: "/about" , image: logo},
//   { name: "Candidates", path: "/candidates" },
//   { name: "Jobs", path: "/JobOpening" },
//   { name: "Users", path: "/User" },
// ];

const defaultTheme = createTheme();
const drawerWidth = 200;

const Root = ({ children }) => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  if (localStorage.getItem("role") === "admin") {
    pages = pagesAdmin;
  } else if (localStorage.getItem("role") === "recruiter") {
    pages = pagesRecruiter;
  } else {
    pages = [{ name: "Register", path: "/Register" }];
  }

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: "flex", backgroundColor: "#eceff1" }}>
          <CssBaseline />
          <Header key={"header"} open={open} toggleDrawer={toggleDrawer} drawerWidth={drawerWidth}/>
          <Drawer key={"drawer"} open={open} toggleDrawer={toggleDrawer} pages={pages} drawerWidth={drawerWidth}/>
          <Box
            component="main"
            sx={{ flexGrow: 1, flexDirection: "column", height: "100vh", overflow: "auto" }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {/* <Container sx={{ mt: 12, mb: 4 }}> */}
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

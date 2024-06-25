import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Box, Container, CssBaseline, Grid, Toolbar } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { createTheme} from '@mui/material/styles';
import Drawer from "../components/Drawer/Drawer";

let pages = [];

const pagesAdmin = [
  // { name: "Home", path: "/Home" },
  { name: "Candidates", path: "/Candidates" },
  { name: "Jobs", path: "/JobOpening" },
  { name: "Users", path: "/User" },
  { name: "Company", path: "/Company" },
];

const pagesRecruiter = [
  // { name: "Home", path: "/Home" },
  { name: "Candidates", path: "/Candidates" },
  { name: "Jobs", path: "/JobOpening" },
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
  } else {
    pages = pagesRecruiter;
  }

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: "flex" }}>
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

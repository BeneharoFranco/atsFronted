import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const CustomDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, drawerWidth }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: "#1976d2",
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

const Drawer = ({open, toggleDrawer, pages, drawerWidth}) => {
  return (
    <>
      <CustomDrawer variant="permanent" open={open} drawerWidth={drawerWidth}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon sx={{ color: "#fff" }}  />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          {pages.map((page, idx) => (
            <ListItemButton key={idx} component={Link} to={page.path} >
              <ListItemIcon color="error">
                {/* <DashboardIcon color="#fff"  /> */}
                {
                  page.icon ? page.icon : <DashboardIcon sx={{ color: "#fff" }} />
                }
              </ListItemIcon>
              <ListItemText primary={<Typography variant="span" style={{ color: '#FFFFFF' }}>{page.name}</Typography>} />
            </ListItemButton>
          ))}
        </List>
      </CustomDrawer>
    </>
  );
};

Drawer.propTypes = {
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func,
  pages: PropTypes.array,
    drawerWidth: PropTypes.number,
};

export default Drawer;

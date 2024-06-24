import "./Header.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

let pages = [];

const pagesAdmin = [

  { name: "Candidates", path: "/candidates" },
  { name: "Jobs", path: "/JobOpening" },
  { name: "Users", path: "/User" },
  { name: "Company", path: "/Company"},
];

const pagesRecruiter = [

  { name: "Candidates", path: "/candidates" },
  { name: "Jobs", path: "/JobOpening" }
];


const Header = () => {
  
  if(localStorage.getItem('role')=="admin"){
  pages = pagesAdmin;
}else {
  pages = pagesRecruiter;
}
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const navigate = useNavigate();
  const handleClose = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/Home");
  };

  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          {/* <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            <Link to="/about" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
              <img src={logo} alt="Company Logo" style={{ height: '70px', marginRight: '10px' }} />
              About us
            </Link>
          </Typography>
          <Typography variant="h6" noWrap component="div">
            <Link to="/jobs" style={{ textDecoration: 'none', color: 'inherit' }}>
              Jobs
            </Link>
          </Typography>
          <Typography variant="h6" noWrap component="div">
            <Link to="/candidates" style={{ textDecoration: 'none', color: 'inherit' }}>
              Candidates
            </Link>
          </Typography> */}
          {
          pages.map((page, idx) => {
            return (
              <>
                <Typography
                  key={idx}
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    alignItems: "center",
                  }}
                >
                  <Link
                    to={page.path}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {page.image !== undefined ? (
                      <img
                        src={page.image}
                        alt="Company Logo"
                        style={{ height: "70px", marginRight: "10px" }}
                      />
                    ) : (
                      ""
                    )}
                    {page.name}
                  </Link>
                </Typography>
              </>
            );
          })}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
            onClick={handleMenu}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {/* <MenuItem onClick={handleClose}>Log In</MenuItem> */}
            <MenuItem onClick={handleClose}>Log Out</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

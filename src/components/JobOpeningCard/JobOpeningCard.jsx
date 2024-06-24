import React, { useState } from "react";
// import * as React from 'react';
import PropTypes from "prop-types";
import "./JobOpeningCard.css";
import { deleteJobOpening } from "../../services/jobOpeningService";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";
import Show from "../Show/Show";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: "auto",
  marginTop: theme.spacing(5),
}));

const JobOpening = ({ jobOpening, delJobOpening }) => {
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
  const handleClickMenu = () => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClickDelete = async () => {
    try {
      await deleteJobOpening(jobOpening.id);
      delJobOpening(jobOpening);
      setAnchorEl(null);
    } catch (error) {
      alert("Error al eliminar el JobOpening");
      console.error("Error eliminar JobOpening:", error);
    }
  };

  return (
    <>
      {/* <StyledCard> */}
      <Grid2 xs={12} sm={6} md={3} sx={{  }}>
        <Card sx={{  }}>
          <CardHeader
            action={
              <IconButton aria-label="settings" onClick={handleClickMenu}>
                <MoreVertIcon />
              </IconButton>
            }
            title={`${jobOpening.title}`}
            subheader={<Avatar>{jobOpening.id_company}</Avatar>}
          />

          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseMenu}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleCloseMenu}>
              <Link color="inherit" href={"/JobOpening/Edit/" + jobOpening.id}>Edit</Link>
            </MenuItem>
            <MenuItem onClick={handleClickDelete}>Delete</MenuItem>
            <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
          </Menu>
        </Card>
      </Grid2>
      {/* </StyledCard> */}

      {/* <div>
        <p>{jobOpening.id}</p>
        <p>{jobOpening.title}</p>
        <Show key={"Show"} /> */}
        {/* <button onClick={(e) => {}}>Show</button> */}
        
        {/* <button onClick={handleClickDelete}>Eliminar</button>
      </div> */}
    </>
  );
};

JobOpening.propTypes = {
  jobOpening: PropTypes.object,
  delJobOpening: PropTypes.func,
};

export default JobOpening;

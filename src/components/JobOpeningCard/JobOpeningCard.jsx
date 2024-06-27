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
  Chip,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Moment from 'moment';
import DeleteModal from "../DeleteModal/DeleteModal";

const StyledCard = styled(Card)(({ theme }) => ({
  // maxWidth: 345,
  flexGrow: 1,
  position: "relative"
  // margin: "auto",
  // marginTop: theme.spacing(5),
}));

const JobOpening = ({ jobOpening, delJobOpening, setCharge, edit }) => {
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
      // console.error("Error eliminar JobOpening:", error);
    }
  };

  Moment.locale('es');

  return (
    <>
      <Grid2 xs={12} md={6} lg={4} sx={{ flexGrow: "1", maxHeight: "250px" }}>
        <StyledCard>
          <CardHeader
            // action={
            //   <IconButton aria-label="settings" onClick={handleClickMenu}>
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title={`${jobOpening.title}`}
            // subheader={<Avatar>{jobOpening.id_company}</Avatar>}
            subheader={jobOpening.description}
          />

          <Chip label={jobOpening.status} color="success" sx={{ position: "absolute", top: "10px", right: "10px" }} />

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Posting Date: {Moment(jobOpening.posting_date).format('DD MMM YYYY hh:mm') || ""}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              End Date: {Moment(jobOpening.end_date).format('DD MMM YYYY hh:mm') || ""}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Location: {jobOpening.location || ""}
            </Typography>
          </CardContent>

          <CardContent>
            <Stack direction="row" spacing={2}>
              <Button onClick={() => edit(jobOpening.id)}>Edit</Button>
              <DeleteModal id={jobOpening.id} setDel={setCharge} />
            </Stack>
          </CardContent>
        </StyledCard>
      </Grid2>
    </>
  );
};

JobOpening.propTypes = {
  jobOpening: PropTypes.object,
  delJobOpening: PropTypes.func,
  setCharge: PropTypes.func,
  edit: PropTypes.func,
};

export default JobOpening;
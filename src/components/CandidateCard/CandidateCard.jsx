import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
  Button,
  Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import DeleteModal from "../DeleteModal/DeleteModal";

const StyledCard = styled(Card)(({ theme }) => ({
  flexGrow: 1,
  position: "relative",
}));

const CandidateCard = ({ candidate, setDel, onEdit }) => {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <StyledCard>
        <CardHeader
          avatar={<Avatar>{candidate.first_name[0]}</Avatar>}
          title={`${candidate.first_name} ${candidate.last_name}`}
          subheader={candidate.email}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Dirección: {candidate.address}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Teléfono: {candidate.phone}
          </Typography>
        </CardContent>
        <CardContent>
          {/* <Button onClick={() => onEdit(candidate.id)}>Editar</Button> */}
          <DeleteModal id={candidate.id} setDel={setDel} />
        </CardContent>
      </StyledCard>
    </Grid>
  );
};

CandidateCard.propTypes = {
  candidate: PropTypes.object,
  setDel: PropTypes.func,
  onEdit: PropTypes.func,
};

export default CandidateCard;

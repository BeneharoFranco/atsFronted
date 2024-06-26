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
import DeleteModal from "../DeleteModal/DeleteModal";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const StyledCard = styled(Card)(({ theme }) => ({
  flexGrow: 1,
  position: "relative",
}));

const CandidateCard = ({ candidate, setDel, onEdit, onApplication }) => {
  return (
    <Grid2 item xs={12} md={6} lg={4}>
      <StyledCard>
        <CardHeader
          avatar={<Avatar>{candidate.first_name[0]}</Avatar>}
          title={`${candidate.first_name} ${candidate.last_name}`}
          subheader={candidate.email}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Address: {candidate.address}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Phone: {candidate.phone}
          </Typography>
        </CardContent>
        <CardContent>
          {/* <Button onClick={() => onEdit(candidate.id)}>Editar</Button> */}
          {/* <DeleteModal id={candidate.id} setDel={setDel} /> */}
          { onApplication ? <Button onClick={() => onApplication(candidate.id)}>Application</Button> : ""}
        </CardContent>
      </StyledCard>
    </Grid2>
  );
};

CandidateCard.propTypes = {
  candidate: PropTypes.object,
  setDel: PropTypes.func,
  onEdit: PropTypes.func,
  onApplication: PropTypes.func,
};

export default CandidateCard;

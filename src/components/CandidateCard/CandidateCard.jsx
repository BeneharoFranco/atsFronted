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
  backgroundColor: "rgb(119 136 153 / 70%)",
  color: "#fff",
  fontWeight: "bold",
  transition: "0.5s",
  ':hover': {
    boxShadow: theme.shadows[10],
    backgroundColor: "rgb(119 136 153)",
  },
}));

const CandidateCard = ({ candidate, setDel, onEdit, onApplication }) => {
  return (
    <Grid2 item xs={12} md={6} lg={4}>
      <StyledCard>
        <CardHeader
          avatar={<Avatar sx={{ backgroundColor: "#1976d2"}}>{candidate.first_name[0].toUpperCase()}</Avatar>}
          title={<Typography sx={{ color: "#fff", fontWeight: "bold" }}>{candidate.first_name} {candidate.last_name}</Typography>}
          subheader={<Typography sx={{ color: "#fff", fontWeight: "bold" }}>{candidate.email}</Typography>}
          sx={{ color: "#fff", fontWeight: "bold" }}
        />
        <CardContent>
          <Typography variant="body2" color="#fff" component="p" fontWeight="bold">
            Address: {candidate.address || "Un defined"}
          </Typography>
          <Typography variant="body2" color="#fff" component="p" fontWeight="bold">
            Phone: {candidate.phone || "Un defined"}
          </Typography>
        </CardContent>
        <CardContent>
          {/* <Button onClick={() => onEdit(candidate.id)}>Editar</Button> */}
          {/* <DeleteModal id={candidate.id} setDel={setDel} /> */}
          { onApplication ? <Button variant="contained" color="success" sx={{ backgroundColor: "#81c784" }} onClick={() => onApplication(candidate.id)}>Application</Button> : ""}
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

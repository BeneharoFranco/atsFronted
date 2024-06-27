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

const CompanyCard = ({ company: company, setDel, onEdit }) => {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <StyledCard>
        <CardHeader
          avatar={<Avatar>{company.name[0]}</Avatar>}
          title={`${company.name}`}
          subheader={company.email}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Address: {company.address}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Phone: {company.phone}
          </Typography>
        </CardContent>
        <CardContent>
          {/* <Button onClick={() => onEdit(company.id)}>Editar</Button> */}
          <DeleteModal id={company.id} setDel={setDel} />
        </CardContent>
      </StyledCard>
    </Grid>
  );
};

CompanyCard.propTypes = {
  company: PropTypes.object,
  setDel: PropTypes.func,
  onEdit: PropTypes.func,
};

export default CompanyCard;

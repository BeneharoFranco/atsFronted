import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Avatar,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import DeleteModal from "../DeleteModal/DeleteModal";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: "auto",
  marginTop: theme.spacing(5),
}));

const UserCard = ({ users, setDel, onEdit }) => {
  return (
    <StyledCard>
      <CardHeader
        avatar={<Avatar>{users.first_name[0]}</Avatar>}
        title={`${users.first_name} ${users.last_name}`}
        subheader={users.role}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Email: {users.email}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Phone: {users.phone}
        </Typography>
      </CardContent>
      {users.photo ? (
        <CardMedia
          component="img"
          alt={`${users.first_name} ${users.last_name}`}
          height="140"
          image={users.photo}
          title={`${users.first_name} ${users.last_name}`}
        />
      ) : (
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            No Photo Available
          </Typography>
        </CardContent>
      )}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Status: {users.valid ? "Active" : "Inactive"}
        </Typography>
      </CardContent>
      <CardContent>
        <Stack direction="row" spacing={2}>
          <Button onClick={() => onEdit(users.id)}>Edit</Button>
          <DeleteModal id={users.id} setDel={setDel} />
        </Stack>
      </CardContent>
    </StyledCard>
  );
};

UserCard.propTypes = {
  users: PropTypes.object,
  setDel: PropTypes.func,
  onEdit: PropTypes.func.isRequired,
};

export default UserCard;

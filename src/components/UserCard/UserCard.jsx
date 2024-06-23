import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Avatar,
  Button
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import DeleteModal from "../DeleteModal/DeleteModal";



const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: "auto",
  marginTop: theme.spacing(5),
}));

const UserCard = ({ users, setDel }) => {
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
          <Link
            to={{
              pathname: `/User/Edit/${users.id}`,
            }}
          >
            <Button>Edit</Button>
          </Link>
          <DeleteModal id={users.id} setDel={setDel}/>
{/*           <Link
            to={{
              pathname: `/User/Show/${users.id}`,
            }}
          >
            <Button>Show</Button>
          </Link> */}
        </Stack>
      </CardContent>
    </StyledCard>
  );
};

UserCard.propTypes = {
  users: PropTypes.object,
  setDel: PropTypes.func
};

export default UserCard;

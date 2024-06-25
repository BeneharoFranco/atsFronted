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
  Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import DeleteModal from "../DeleteModal/DeleteModal";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const StyledCard = styled(Card)(({ theme }) => ({
  // maxWidth: 345,
  flexGrow: 1,
  position: "relative"
  // margin: "auto",
  // marginTop: theme.spacing(5),
}));

const UserCard = ({ users, setDel, onEdit }) => {
  return (
    <Grid2 xs={12} md={6} lg={4} sx={{ flexGrow: "1", maxHeight: "250px"}}>
      <StyledCard>
        <CardHeader
          avatar={<Avatar>{users.first_name[0]}</Avatar>}
          title={`${users.first_name} ${users.last_name}`}
          subheader={users.role}
        />
        {users.valid ? <Chip label="Activo" color="success" sx={{ position: "absolute", top: "10px", right: "10px" }}/> : <Chip label="Inactive" color="error"  sx={{ position: "absolute", top: "10px", right: "10px" }}/>}
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Email: {users.email}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Phone: {users.phone}
          </Typography>
        </CardContent>
        {/* {users.photo ? (
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
        )} */}
        {/* <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Status: {users.valid ? "Active" : "Inactive"}
          </Typography>
        </CardContent> */}
        <CardContent>
          <Stack direction="row" spacing={2}>
            <Button onClick={() => onEdit(users.id)}>Edit</Button>
            <DeleteModal id={users.id} setDel={setDel} />
          </Stack>
        </CardContent>
      </StyledCard>
    </Grid2>
  );
};

UserCard.propTypes = {
  users: PropTypes.object,
  setDel: PropTypes.func,
  onEdit: PropTypes.func.isRequired,
};

export default UserCard;

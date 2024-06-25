import { useEffect, useState } from "react";
import UserCard from "../../components/UserCard/UserCard";
import UserEdit from "./UserEdit/UserEdit";
import "./Users.css";
import { getAllUsers } from "../../services/userService";
import Alert from "@mui/material/Alert";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Button } from "@mui/material";
import UserAdd from "./UserAdd/UserAdd";

const User = () => {
  const [users, setUsers] = useState([]);
  const [alert, setAlert] = useState(false);
  const [del, setDel] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    const userList = async () => {
      try {
        const { result } = await getAllUsers();
        if (!result || result.length === 0) {
          setAlert(true);
        }
        setUsers(result);
        setDel(false);
      } catch (error) {
        console.error("Error fetching USERS ", error);
        setAlert(true);
      }
    };
    userList();
  }, [del]);

  const handleEditOpen = (userId) => {
    setSelectedUserId(userId);
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setSelectedUserId(null);
    setOpenEdit(false);
  };

  const handleAddOpen = () => {
    setOpenAdd(true);
  };

  const handleAddClose = () => {
    setOpenAdd(false);
  };

  const handleUpdate = () => {
    // Trigger a re-fetch of the user list
    setDel(true);
  };

  return (
    <Grid2 minHeight={"85vh"} container spacing={3} width={"100%"} sx={{ flexGrow: "1" }}>
      <Button variant="contained" onClick={handleAddOpen} sx={{ height: "40px" }}>Add</Button>

      <Grid2
        container
        // spacing={2}
        xs={12}
        sx={{ width: "100%", height: "100%", padding: 2, flexGrow: "1", alignContent: "flex-start" }}
      >
        {alert ? (
          <Alert severity="error">Error fetching Users</Alert>
        ) : (
          users.map((data) => (
            <UserCard
              key={data.id}
              users={data}
              setUsers={setUsers}
              setDel={setDel}
              onEdit={handleEditOpen}
            />
          ))
        )}
      </Grid2>
      <UserAdd
        open={openAdd}
        handleClose={handleAddClose}
        onUpdate={handleUpdate}
      />
      <UserEdit
        open={openEdit}
        handleClose={handleEditClose}
        userId={selectedUserId}
        onUpdate={handleUpdate}
      />
      
    </Grid2>
  );
};

export default User;

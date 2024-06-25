import { useEffect, useState } from "react";
import UserCard from "../../components/UserCard/UserCard";
import UserEdit from "./UserEdit/UserEdit";
import "./Users.css";
import { getAllUsers } from "../../services/userService";
import Alert from "@mui/material/Alert";

const User = () => {
  const [users, setUsers] = useState([]);
  const [alert, setAlert] = useState(false);
  const [del, setDel] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
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

  const handleUpdate = () => {
    // Trigger a re-fetch of the user list
    setDel(true);
  };

  return (
    <div>
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
      <UserEdit
        open={openEdit}
        handleClose={handleEditClose}
        userId={selectedUserId}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default User;

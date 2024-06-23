import { useEffect, useState } from "react";
import UserCard from "../../components/UserCard/UserCard";
import "./Users.css";
import { getAllUsers } from "../../services/userService";
import Alert from "@mui/material/Alert";

const User = () => {
  const [users, setUsers] = useState([]);
  const [alert, setAlert] = useState(false);
  const [del, setDel] = useState(false);
  

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
  }, []);

  return (
    <div>
      {alert ? (
        <Alert severity="error">Error fetching Users</Alert>
      ) : (
        users.map((data) => {
          return <UserCard key={data.id} users={data} setUsers={setUsers} setDel={setDel}/>;
        })
      )}
    </div>
  );
};

export default User;

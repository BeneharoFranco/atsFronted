import './Candidate.css'
import { useEffect, useState } from "react";
import UserCard from "../../components/UserCard/UserCard";
import Alert from "@mui/material/Alert";
import { getAllCandidates } from '../../services/candidateService';

const Candidate = () => {

 const [list, setList] = useState([]);
  const [alert, setAlert] = useState(false);
  const [del, setDel] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedCanId, setSelectedCanId] = useState(null);

  useEffect(() => {
    const candidateList = async () => {
      try {
        const { result } = await getAllCandidates();
        if (!result || result.length === 0) {
          setAlert(true);
        }
        setList(result);
        setDel(false);
      } catch (error) {
        console.error("Error fetching USERS ", error);
        setAlert(true);
      }
    };
    candidateList();
  }, [del]);

  const handleEditOpen = (canId) => {
    setSelectedCanId(canId);
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setSelectedCanId(null);
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
        list.map((data) => (
          <UserCard
            key={data.id}
            candidates={data}
            setList={setList}
            setDel={setDel}
            onEdit={handleEditOpen}
          />
        ))
      )}
      {/* <UserEdit
        open={openEdit}
        handleClose={handleEditClose}
        canId={selectedCanId}
        onUpdate={handleUpdate}
      /> */}
    </div>
  );

}

export default Candidate
import "./Candidate.css";
import { useEffect, useState } from "react";
import UserCard from "../../components/UserCard/UserCard";
import Alert from "@mui/material/Alert";
import { getAllCandidates } from "../../services/candidateService";

const Candidate = () => {
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState(false);
  const [del, setDel] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedCanId, setSelectedCanId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllCandidates();
        if (!result || result.length === 0) {
          setAlert(true);
        } else {
          setList(result);
        }
      } catch (error) {
        console.error("Error fetching candidates:", error);
        setAlert(true);
      }
    };
    fetchData();
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
    setDel(!del); // Cambia el estado de 'del' para forzar una actualización de datos
  };

  return (
    <div>
      {alert ? (
        <Alert severity="error">Error fetching Candidates</Alert>
      ) : (
        list.map((data) => (
          <UserCard
            key={data.id}
            candidate={data}
            setList={setList}
            setDel={setDel}
            onEdit={handleEditOpen}
          />
        ))
      )}
      {/* Componente para editar */}
      {/* <UserEdit
        open={openEdit}
        handleClose={handleEditClose}
        canId={selectedCanId}
        onUpdate={handleUpdate}
      /> */}
    </div>
  );
};

export default Candidate;

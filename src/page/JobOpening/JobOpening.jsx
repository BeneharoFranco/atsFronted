import { useEffect, useState } from "react";
import "./JobOpening.css";
import Add from "./Add/Add";

import { getAllJobOpening } from "../../services/jobOpeningService";
import ListCard from "../../components/ListCard/ListCard";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Button } from "@mui/material";
import Edit from "./Edit/Edit";
import Applications from "./Applications/Applications";

const JobOpening = () => {
  const [jobOpenings, setJobOpenings] = useState([]);
  // const [jobOpeningDel, setJobOpeningDel] = useState(null);
  const [charge, setCharge] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openModalApplications, setModalApplications] = useState(false);
  const [jobOpeningId, setJobOpeningId] = useState(null);

  useEffect(() => {
    const jobOpeningList = async () => {
      try {
        const { result } = await getAllJobOpening();
        setJobOpenings(result);
      } catch (error) {
        // console.error("Error fetching JobOpening ", error);
        alert("Error Jobopening")
      }
    };
    
    jobOpeningList();
  }, [charge]);

  const delJobOpening = (jobOpening) => {
    const position = jobOpenings.indexOf(jobOpening);
    if (position != -1) {
      jobOpenings.splice(position, 1);
      // setJobOpeningDel(jobOpening);
    }
  };

  // Modal open
  const handleAddOpen = () => {
    setOpenAdd(true);
  };
  const handleAddClose = () => {
    setOpenAdd(false);
  };
  // Modal edit
  const handleEditOpen = (jobOpeningId) => {
    setJobOpeningId(jobOpeningId);
    setOpenEdit(true);
  };
  const handleEditClose = () => {
    setJobOpeningId(null);
    setOpenEdit(false);
  };
  // Modal applications
  const handleModalApplications = (jobOpeningId) => {
    setJobOpeningId(jobOpeningId);
    setModalApplications(true);
  };
  const handleModalApplicationsClose = () => {
    setJobOpeningId(null);
    setModalApplications(false);
  };

  const handleUpdate = () => {
    // Trigger a re-fetch of the user list
    setCharge(true);
  };

  return (
    <>
      <Grid2 minHeight={"85vh"} container spacing={3} width={"100%"} sx={{ flexGrow: "1" }} >
        <Button variant="contained" onClick={handleAddOpen} sx={{ height: "40px" }} >Add</Button>

        {/* <Grid2 container xs={12}
          spacing={3}
          sx={{ width: "100%", height: "100%", padding: 2, flexGrow: "1", alignContent: "flex-start", }}
        > */}
          {
            <ListCard 
              key={"ListCard"} 
              objects={{ jobOpenings }} 
              type={"jobOpening"} 
              delObject={(jobOpening) => delJobOpening(jobOpening)} 
              editObject={handleEditOpen}
              setCharge={setCharge}
              showApplications={handleModalApplications}
              />
          }

          <Add open={openAdd} handleClose={handleAddClose} onUpdate={handleUpdate} />
          <Edit open={openEdit} handleClose={handleEditClose} onUpdate={handleUpdate} jobOpeningId={jobOpeningId}/>
          <Applications open={openModalApplications} handleClose={handleModalApplicationsClose}  jobOpeningId={jobOpeningId}/>
        {/* </Grid2> */}
      </Grid2>
    </>
  );
};

export default JobOpening;

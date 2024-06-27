import "./Candidate.css";
import { useEffect, useState } from "react";
import { getAllCandidates } from "../../services/candidateService";
import CandidateCard from "../../components/CandidateCard/CandidateCard";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import { createApplication } from "../../services/applicationService";
import { getAllJobOpening } from "../../services/jobOpeningService";

const Candidate = () => {
  const [list, setList] = useState([]);
  // const [alert, setAlert] = useState(false);
  const [del, setDel] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedCanId, setSelectedCanId] = useState(null);

  const [openApplication, setOpenApplication] = useState(false);
  const [jobOpenings, setJobOpenings] = useState([]);
  const [jobOpeningId, setJobOpeningId] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const { result } = await getAllCandidates();
        if (!result || result.length === 0) {
          // setAlert(true);
        } else {
          setList(result);
        }
      } catch (error) {
        console.error("Error fetching candidates:", error);
        // setAlert(true);
      }
    };
    fetchData();

    const listJobOpenings = async () => {
      try {
        const { result } = await getAllJobOpening();
        if(result && result.length != 0)
          setJobOpenings(result);
      } catch (error) {
        alert("Error fetching candidates:", error);
      }
    }
    listJobOpenings();
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
    setDel(!del);
  };

  // JobOpening
  const handleJobOpeningChange = (e) => {
    const { value } = e.target;
    setJobOpeningId(value);
  }

  // Application
  const handleApplicationOpen = (candidateId) => {
    setSelectedCanId(candidateId);
    setOpenApplication(true);
  };
  const handleApplicationClose = () => {
    setSelectedCanId(null);
    setOpenApplication(false);
  };
  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        "candidateId": selectedCanId,
        "jobOpeningId": jobOpeningId,
      }
      const response = await createApplication(formData);
      if(response.result === undefined || response.result === null || !response.result){
        alert("Error al crear el Application");
      }
      else{
        // onUpdate();
        handleApplicationClose();
      }
    } catch (error) {
      alert("Error al crear el Application");
      console.error("Error create Application:", error);
    }
  };

  return (
    <>
    <Grid2 minHeight={"85vh"} container spacing={3} width={"100%"} sx={{ flexGrow: "1" }} >
      <Grid2 container xs={12} spacing={3} sx={{ width: "100%", height: "100%", padding: 2, flexGrow: "1", alignContent: "flex-start"}} >
        {
          list.map((data) => (
            <CandidateCard
              key={data.id}
              candidate={data}
              setList={setList}
              setDel={setDel}
              onEdit={handleEditOpen}
              onApplication={handleApplicationOpen}
            />
          ))
        }

      <Dialog open={openApplication} onClose={handleApplicationClose} maxWidth={"md"} fullWidth >
        <DialogTitle>Applications User</DialogTitle>
        <form onSubmit={handleSubmitApplication}>
          <DialogContent>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <FormControl fullWidth>
                <InputLabel id="label-jobOpening">Company</InputLabel>
                <Select
                  labelId="label-jobOpening"
                  id="jobOpening"
                  name="jobOpening"
                  value={jobOpeningId}
                  label="Company"
                  onChange={handleJobOpeningChange}
                >
                  {jobOpenings.map((jobOpening) => {
                    return (<MenuItem key={jobOpening.id} value={jobOpening.id}>{jobOpening.title}</MenuItem>);
                  })}
                </Select>
              </FormControl>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleApplicationClose} color="secondary">
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      </Grid2>
    </Grid2>
    </>
    // <div>
    //   {alert ? (
    //     <Alert severity="error">Error fetching Candidates</Alert>
    //   ) : (
    //     list.map((data) => (
    //       <CandidateCard
    //         key={data.id}
    //         candidate={data}
    //         setList={setList}
    //         setDel={setDel}
    //         onEdit={handleEditOpen}
    //       />
    //     ))
    //   )}
    //   {/* Componente para editar */}
    //   {/* <UserEdit
    //     open={openEdit}
    //     handleClose={handleEditClose}
    //     canId={selectedCanId}
    //     onUpdate={handleUpdate}
    //   /> */}
    // </div>
  );
};

export default Candidate;

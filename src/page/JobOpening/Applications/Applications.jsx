import { Alert, Box, Dialog, DialogContent, DialogTitle } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllApplicationByJobOpening } from "../../../services/jobOpeningService";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CandidateCard from "../../../components/CandidateCard/CandidateCard";

const Applications = ({ open, handleClose, jobOpeningId }) => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const listApplications = async () => {
      try {
        const { result } = await getAllApplicationByJobOpening(jobOpeningId);
        if (result || result.length != 0) {
          setApplications(result.applications);
        }
      } catch (error) {
        // alert("Error get applications");
      }
    };

    if (jobOpeningId) {
        listApplications();
    }
  }, [jobOpeningId]);

  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Applications</DialogTitle>
        {/* <DialogContent container xs={12} spacing={3} sx={{ width: "100%", height: "100%", padding: 2, flexGrow: "1", alignContent: "flex-start", }} > */}
        <DialogContent>
            <Grid2 container xs={12} spacing={3} sx={{ width: "100%", height: "100%", padding: 2, flexGrow: "1", alignContent: "flex-start"}} >
            {
                applications.length != 0 ?
                    applications.map((data) => (
                        <CandidateCard
                        key={data.id}
                        candidate={data}
                        />
                    ))
                : <Alert variant="filled" severity="info" sx={{ width: "100%" }}>Don`t have Applications</Alert>
            }
            </Grid2>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Applications;

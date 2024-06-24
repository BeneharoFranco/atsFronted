import { useEffect, useState } from "react";
import "./JobOpening.css";
import {
  getAllJobOpening,
//   getJobOpening,
//   createJobOpening,
//   editJobOpening,
//   deleteJobOpening,
} from "../../services/jobOpeningService";
import ListCard from "../../components/ListCard/ListCard";
import Link from '@mui/material/Link';
import { Box, Container, Grid, Toolbar } from "@mui/material";

const JobOpening = () => {
  const [jobOpenings, setJobOpenings] = useState([]);
  const [jobOpeningDel, setJobOpeningDel] = useState(null);

  useEffect(() => {
    const jobOpeningList = async () => {
      try {
        const { result } = await getAllJobOpening();
        setJobOpenings(result);
      } catch (error) {
        console.error("Error fetching JobOpening ", error);
      }
    };
    jobOpeningList();
  }, [jobOpeningDel]);

  const delJobOpening = (jobOpening) => {
    const position = jobOpenings.indexOf(jobOpening);
    if(position != -1){
      jobOpenings.splice(position, 1);
      setJobOpeningDel(jobOpening);
    }
  };

  return (
    <>
      <Grid minHeight={"85vh"} container spacing={3} sx={{ }}>
        <Link color="inherit" href="/JobOpening/Add">Añadir</Link>
        {<ListCard key={"ListCard"} objects={{jobOpenings}} type={"jobOpening"} delObject={(jobOpening) => delJobOpening(jobOpening)} />}
      </Grid>
    </>
  );
};

export default JobOpening;

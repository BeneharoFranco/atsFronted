
import PropTypes from "prop-types";
import "./JobOpeningCard.css";
import { deleteJobOpening } from "../../services/jobOpeningService";
import Link from '@mui/material/Link';

const JobOpening = ({jobOpening, delJobOpening}) => {

  const handleClick = async () => {
    try {
      await deleteJobOpening(jobOpening.id);
      delJobOpening(jobOpening);
    } catch (error) {
      alert("Error al eliminar el JobOpening");
      console.error("Error eliminar JobOpening:", error);
    }
  };

  return (
    <>
    <div>
      <p>{jobOpening.id}</p>
      <p>{jobOpening.title}</p>
      <button onClick={(e) => {}}>Show</button>
      <Link color="inherit" href={"/JobOpening/edit/" + jobOpening.id}>Edit</Link>
      <button onClick={handleClick}>Eliminar</button>
    </div>
    </>
  );
};

JobOpening.propTypes = {
  jobOpening: PropTypes.object,
  delJobOpening: PropTypes.func
};

export default JobOpening;

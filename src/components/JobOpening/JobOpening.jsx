
import PropTypes from "prop-types";
import "./JobOpening.css";
import { deleteJobOpening } from "../../services/jobOpeningService";

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

import "./Edit.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { editJobOpening, getJobOpening } from "../../../services/jobOpeningService";
import { getAllCompany } from "../../../services/CompanyService";
import Link from '@mui/material/Link';
import { TextField } from "@mui/material";
// import { makeStyles } from '@material-ui/core/styles';

const Edit = () => {
  const { idJobOpening } = useParams();
  const [companies, setCompanies] = useState([]);
  const [jobOpening, setJobOpening] = useState({});
  // const [formData, setFormData] = useState({ title: "", description: "", location: "", end_date: "", companyId: "" });

  useEffect(() => {
    const obtainJobOpening = async () => {
      try {
        const { result } = await getJobOpening(idJobOpening);
        if(result.end_date !== undefined && result.end_date !== null)
          result.end_date = result.end_date.substring(0, 16)
        setJobOpening(result);
      } catch (error) {
        console.error("Error fetching JobOpening ", error);
      }
    };
    const companyList = async () => {
      try {
        const { result } = await getAllCompany();
        setCompanies(result);
      } catch (error) {
        console.error("Error fetching JobOpening ", error);
      }
    };

    obtainJobOpening();

    companyList();
  }, [idJobOpening]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobOpening((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // jobOpening.end_date = new Date(jobOpening.end_date.to).toISOString()
      jobOpening.end_date = `${jobOpening.end_date}:00.000Z`
      const response = await editJobOpening(idJobOpening, jobOpening);
      // const response = await editJobOpening(idJobOpening, formData);
      if(response.jobOpening)
        alert(response.message);
      else
        alert("Error al editar el JobOpening");
    } catch (error) {
      alert("Error al creal el JobOpening");
      console.error("Error create JobOpening:", error);
    }
  };

  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" id="title" placeholder="Título del puesto" value={jobOpening.title} onChange={handleChange} />
        <textarea name="description" id="description" placeholder="Descripción del puesto" onChange={handleChange} value={jobOpening.description}></textarea>
        <input type="text" name="location" id="location" placeholder="Localización del puesto" value={jobOpening.location} onChange={handleChange} />
        <input type="datetime-local" name="end_date" id="end_date" placeholder="Fecha de cierre del puesto" value={jobOpening.end_date} onChange={handleChange} />

        {/* <TextField
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue={jobOpening.end_date}
        InputLabelProps={{
          shrink: true,
        }}
        /> */}

        <select name="companyId" id="companyId"  value={jobOpening.companyId} onChange={handleChange}>
          <option hidden disabled selected>Seleccione compañía</option>
          {
            companies.map((company) => {
              return (
                <>
                  <option value={company.id}>{company.name}</option>
                </>
              )
            })
          }
        </select>
        <div>
          <button>Editar</button>
          <Link color="inherit" href="/JobOpening">Cancelar</Link>
        </div>
      </form>
    </>
  );
};

Edit.propTypes = {
  jobOpening: PropTypes.object
};

export default Edit;

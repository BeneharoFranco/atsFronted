import { useEffect, useState } from "react";
import "./Add.css";
import { createJobOpening } from "../../../services/jobOpeningService";
import { getAllCompany } from "../../../services/CompanyService";
import Link from '@mui/material/Link';

const Add = () => {
  const [formData, setFormData] = useState({ title: "", description: "", location: "", end_date: "", companyId: "" });
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const companyList = async () => {
      try {
        const { result } = await getAllCompany();
        setCompanies(result);
      } catch (error) {
        console.error("Error fetching JobOpening ", error);
      }
    };
    companyList();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createJobOpening(formData);
      if(response.result === undefined || response.result === null || !response.result)
        alert("Error al creal el JobOpening");
    } catch (error) {
      alert("Error al creal el JobOpening");
      console.error("Error create JobOpening:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" id="title" placeholder="Título del puesto" value={formData.title} onChange={handleChange} />
        <textarea name="description" id="description" placeholder="Descripción del puesto" onChange={handleChange}>{formData.description}</textarea>
        <input type="text" name="location" id="location" placeholder="Localización del puesto" value={formData.location} onChange={handleChange} />
        <input type="date" name="end_date" id="end_date" placeholder="Fecha de cierre del puesto" value={formData.end_date} onChange={handleChange} />
        <select name="companyId" id="companyId"  value={formData.companyId} onChange={handleChange}>
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
          <button>Añadir</button>
          <Link color="inherit" href="/JobOpening">Cancelar</Link>
        </div>
      </form>
    </>
  );
};

export default Add;

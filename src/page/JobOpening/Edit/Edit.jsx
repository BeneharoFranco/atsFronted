import "./Edit.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { editJobOpening, getJobOpening } from "../../../services/jobOpeningService";
import { getAllCompany } from "../../../services/CompanyService";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, Stack, styled, TextField  } from "@mui/material";
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';

// Textarea
const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
  box-sizing: border-box;
  width: 320px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

const Edit = ({ open, handleClose, jobOpeningId, onUpdate }) => {
  // const { idJobOpening } = useParams();
  const [companies, setCompanies] = useState([]);
  // const [jobOpening, setJobOpening] = useState({});
  const [formData, setFormData] = useState({ title: "", description: "", location: "", end_date: "", companyId: "" });

  useEffect(() => {
    const obtainJobOpening = async () => {
      try {
        const { result } = await getJobOpening(jobOpeningId);
        if(result.end_date !== undefined && result.end_date !== null)
          result.end_date = result.end_date.substring(0, 16)
        // setJobOpening(result);
        setFormData({
          title: result.title || "",
          description: result.description || "",
          location: result.location || "",
          end_date: result.end_date || "",
          companyId: result.companyId || "",
        });
      } catch (error) {
        console.log("Error edit Jobopening")
        // console.error("Error fetching JobOpening ", error);
      }
    };
    const companyList = async () => {
      try {
        const { result } = await getAllCompany();
        setCompanies(result);
      } catch (error) {
        console.log("Error edit Jobopening")
        // console.error("Error fetching JobOpening ", error);
      }
    };

    obtainJobOpening();
    companyList();
  }, [jobOpeningId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // setJobOpening((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // jobOpening.end_date = `${jobOpening.end_date}:00.000Z`
      // const response = await editJobOpening(idJobOpening, jobOpening);
      formData.end_date = `${formData.end_date}`
      const response = await editJobOpening(jobOpeningId, formData);
      if(response.jobOpening)
        alert(response.message);
      else
        alert("Error al editar el JobOpening");
    } catch (error) {
      alert("Error al creal el JobOpening");
      // console.error("Error create JobOpening:", error);
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add User</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <TextField
                id="title"
                name="title"
                type="text"
                variant="outlined"
                color="secondary"
                label="Title"
                value={formData.title}
                onChange={handleChange}
                fullWidth
                required
              />
              <FormControl fullWidth>
                <InputLabel id="label-companyId">Company</InputLabel>
                <Select
                  labelId="label-companyId"
                  id="companyId"
                  name="companyId"
                  value={formData.companyId}
                  label="Company"
                  onChange={handleChange}
                >
                  {companies.map((company) => {
                    return (<MenuItem key={company.id} value={company.id}>{company.name}</MenuItem>);
                  })}
                </Select>
              </FormControl>
            </Stack>

            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <TextField
                id="end_date"
                name="end_date"
                label="End Date"
                type="datetime-local"
                defaultValue={formData.end_date}
                value={formData.end_date}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
              <TextField
                id="location"
                name="location"
                type="text"
                variant="outlined"
                color="secondary"
                label="Location"
                value={formData.location}
                onChange={handleChange}
                fullWidth
                required
                sx={{ mb: 4 }}
              />
            </Stack>
            <Textarea
                id="description"
                name="description"
                color="neutral"
                minRows={3}
                placeholder="Description"
                size="lg"
                variant="soft"
                value={formData.description}
                onChange={handleChange}
                sx={{ mb: 4, width: "100%", resize: "none" }}
              />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
  // return (
  //   <>
  //     <form onSubmit={handleSubmit}>
  //       <input type="text" name="title" id="title" placeholder="Título del puesto" value={jobOpening.title} onChange={handleChange} />
  //       <textarea name="description" id="description" placeholder="Descripción del puesto" onChange={handleChange} value={jobOpening.description}></textarea>
  //       <input type="text" name="location" id="location" placeholder="Localización del puesto" value={jobOpening.location} onChange={handleChange} />
  //       <input type="datetime-local" name="end_date" id="end_date" placeholder="Fecha de cierre del puesto" value={jobOpening.end_date} onChange={handleChange} />

  //       {/* <TextField
  //       id="datetime-local"
  //       label="Next appointment"
  //       type="datetime-local"
  //       defaultValue={jobOpening.end_date}
  //       InputLabelProps={{
  //         shrink: true,
  //       }}
  //       /> */}

  //       <select name="companyId" id="companyId"  value={jobOpening.companyId} onChange={handleChange}>
  //         <option hidden disabled selected>Seleccione compañía</option>
  //         {
  //           companies.map((company) => {
  //             return (
  //               <>
  //                 <option value={company.id}>{company.name}</option>
  //               </>
  //             )
  //           })
  //         }
  //       </select>
  //       <div>
  //         <button>Editar</button>
  //         <Link color="inherit" href="/JobOpening">Cancelar</Link>
  //       </div>
  //     </form>
  //   </>
  // );
};

Edit.propTypes = {
  jobOpening: PropTypes.object
};

export default Edit;

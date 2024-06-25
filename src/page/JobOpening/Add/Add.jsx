import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Add.css";
import { createJobOpening } from "../../../services/jobOpeningService";
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

const Add = ({ open, handleClose, onUpdate }) => {
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
      if(response.result === undefined || response.result === null || !response.result){
        alert("Error al creal el JobOpening");
      }
      else{
        onUpdate();
        handleClose();
      }
    } catch (error) {
      alert("Error al creal el JobOpening");
      console.error("Error create JobOpening:", error);
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
  //       <input type="text" name="title" id="title" placeholder="Título del puesto" value={formData.title} onChange={handleChange} />
  //       <textarea name="description" id="description" placeholder="Descripción del puesto" onChange={handleChange}>{formData.description}</textarea>
  //       <input type="text" name="location" id="location" placeholder="Localización del puesto" value={formData.location} onChange={handleChange} />
  //       <input type="date" name="end_date" id="end_date" placeholder="Fecha de cierre del puesto" value={formData.end_date} onChange={handleChange} />
  //       <select name="companyId" id="companyId"  value={formData.companyId} onChange={handleChange}>
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
  //         <button>Añadir</button>
  //         <Link color="inherit" href="/JobOpening">Cancelar</Link>
  //       </div>
  //     </form>
  //   </>
  // );
};

Add.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  onUpdate: PropTypes.func,
};


export default Add;

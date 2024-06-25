import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { useEffect, useState } from "react";

import {
  createJobOpening,
  editJobOpening,
  getJobOpening,
} from "../../../services/jobOpeningService";
import { getAllCompany } from "../../../services/CompanyService";

const ModalJobOpening = ({ idJobOpening, handleClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    end_date: "",
    companyId: "",
  });
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(false);

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

    if (idJobOpening) {
      const obtainJobOpening = async () => {
        try {
          const { result } = await getJobOpening(idJobOpening);
          if (result.end_date !== undefined && result.end_date !== null)
            result.end_date = result.end_date.substring(0, 16);

          setFormData({
            title: result.title || "",
            description: result.description || "",
            location: result.location || "",
            end_date: result.end_date || "",
            companyId: result.companyId || "",
          });
        } catch (error) {
          console.error("Error fetching JobOpening ", error);
        }
      };
      obtainJobOpening();
    }
  }, ["", idJobOpening]);

  const handleChange = (event) => {
    const { id, name, value } = event.target;
    setFormData({
      ...formData,
      [id || name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createJobOpening(formData);
    // onUpdate();
    handleClose();
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
                type="text"
                variant="outlined"
                color="secondary"
                label="First Name"
                value={formData.title}
                onChange={handleChange}
                fullWidth
                required
              />
              <InputLabel id="label-companyId">Company</InputLabel>
              <Select
                labelId="label-companyId"
                id="companyId"
                value={formData.companyId}
                label="Company"
                onChange={handleChange}
              >
                {companies.map((company) => {
                  return (
                    <>
                      <MenuItem value={company.id}>{company.name}</MenuItem>
                    </>
                  );
                })}
              </Select>
              
            </Stack>
            <TextField
              id="location"
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
            <TextareaAutosize
                id="description"
                color="neutral"
                minRows={2}
                placeholder="Description"
                size="lg"
                variant="soft"
                value={formData.description}
                onChange={handleChange}
                sx={{ mb: 4 }}
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
};

export default ModalJobOpening;

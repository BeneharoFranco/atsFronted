import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  TextField,
  Button,
  Container,
  Stack,
  Alert,
  styled,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import UploadFile from "../../../components/UploadFile/UploadFile";
import { createCandidate } from "../../../services/candidateService";
import { useNavigate } from "react-router-dom";

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const CandidateAdd = () => {
  const [form, setForm] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    resume: null,
    photo: null,
  });

  // const [formData, setFormData] = React.useState(new FormData());

  const handleChange = (event) => {
    const { id, name, value } = event.target;
    setForm({
      ...form,
      [id || name]: value,
    });
  };
  // OnChange File
  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
      console.log(reader.result);
      setForm({
        ...form,
        resume: reader.result,
      });
    };

    reader.onerror = function() {
      console.log(reader.error);
    };
    // const formData = new FormData();
    // formData.append('resume', file);
    
    // setFormData(formData);
  };

  const navigate = useNavigate();

  const handleClicAlert = () => {
    setAlert(false);
    window.location.reload(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // for (var key in form){
    //   var value = form[key];
    //   formData.append(key, value);
    //   setFormData(formData);
    // }

    const { message } = await createCandidate(form);
    // const { message } = await createCandidate(formData);
    // setFormData(new FormData());
    if (message == "Candidate created") {
      setAlert(true);
    }

  };

  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleChangeNum = (event) => {
    const newValue = event.target.value;
    if (!Number.isFinite(parseFloat(newValue)) && newValue !== "") {
      setError(true);
    } else {
      setError(false);
      handleChange(event);
    }

    setValue(newValue);
  };

  return (
  
    <React.Fragment>
      <h2>Registro de Candidatura</h2>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            id="first_name"
            type="text"
            variant="outlined"
            color="secondary"
            label="First Name"
            value={form.first_name}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            id="last_name"
            type="text"
            variant="outlined"
            color="secondary"
            label="Last Name"
            value={form.last_name}
            onChange={handleChange}
            fullWidth
            required
          />
        </Stack>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            id="email"
            type="email"
            variant="outlined"
            color="secondary"
            label="Email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            required
            sx={{ mb: 4 }}
          />
          <TextField
            id="phone"
            type="text"
            variant="outlined"
            color="secondary"
            label="Phone"
            error={error}
            helperText={error ? "Only numbers are allowed" : ""}
            value={form.phone}
            fullWidth
            required
            onChange={handleChangeNum}
          />
        </Stack>
        <TextField
          id="address"
          type="text"
          variant="outlined"
          color="secondary"
          label="address"
          onChange={handleChange}
          value={form.address}
          fullWidth
          sx={{ mb: 4 }}
        />
        

        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <Button component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />} >
            Upload CV
            <VisuallyHiddenInput id="resume" name="resume" type="file" onChange={handleFileUpload}/>
          </Button>
        </Stack>
        
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onSubmit={handleSubmit}
        >
          Submit
        </Button>
        {alert ? (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert
              severity="success"
              action={
                <Button color="inherit" size="small" onClick={handleClicAlert}>
                  CERRAR
                </Button>
              }
            >
              El registro de tu candidatura se ha realizado correctamente.
            </Alert>
          </Stack>
        ) : (
          ""
        )}
      </form>
    </React.Fragment>
  );
};

export default CandidateAdd;

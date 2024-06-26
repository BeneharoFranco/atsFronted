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
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";

import UploadFile from "../../../components/UploadFile/UploadFile";
import { createCandidate } from "../../../services/candidateService";
import { useNavigate } from "react-router-dom";

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

  const handleChange = (event) => {
    const { id, name, value } = event.target;
    setForm({
      ...form,
      [id || name]: value,
    });
  };

  const navigate = useNavigate();

  const handleClicAlert = () => {
    setAlert(false);
    window.location.reload(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { message } = await createCandidate(form);
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
          required
          fullWidth
          sx={{ mb: 4 }}
        />

        {/*  <div>  <UploadFile /> </div> */}
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

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
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";

//import UploadFile from "../../../components/UploadFile/UploadFile";
import { createOneUser } from "../../../services/userService";
import { useNavigate } from "react-router-dom";

const UserAdd = () => {
  const [form, setForm] = React.useState({
    first_name: "",
    last_name: "",
    role: "",
    email: "",
    phone: "",
    password: "",
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    createOneUser(form);
    navigate("/User");
  };

  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

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
      <h2>Registro</h2>
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
        <FormControl component="fieldset">
          <FormLabel component="legend">Role</FormLabel>
          <RadioGroup name="role" value={form.role} onChange={handleChange} row>
            <FormControlLabel
              value="recruiter"
              control={<Radio />}
              label="Recruiter"
            />
            <FormControlLabel value="admin" control={<Radio />} label="Admin" />
          </RadioGroup>
        </FormControl>
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
          id="password"
          type="password"
          variant="outlined"
          color="secondary"
          label="Password"
          onChange={handleChange}
          value={form.password}
          required
          fullWidth
          sx={{ mb: 4 }}
        />
        <TextField
          id="phone"
          type="number"
          variant="outlined"
          color="secondary"
          label="Phone"
          error={error}
          helperText={error ? "Only numbers are allowed" : ""}
          value={form.phone}
          onChange={handleChangeNum}
        />
        <div>{/*  <UploadFile /> */}</div>
        <Button type="submit" variant="contained" color="primary" onSubmit={handleSubmit}>
          Submit
        </Button>
      </form>
    </React.Fragment>
  );
};

export default UserAdd;

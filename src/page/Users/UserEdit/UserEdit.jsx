import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate, useParams } from "react-router-dom";

// import UploadFile from "../../../components/UploadFile/UploadFile";

import { getOneUser, editOneUser } from "../../../services/userService";

const UserEdit = () => {
  const { id } = useParams(); // Extract the ID from the URL
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    role: "",
    email: "",
    phone: "",
    password: "",
    photo: null,
  });

  const [error, setError] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getOneUser(id);
      setForm({
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        role: user.role || "",
        email: user.email || "",
        phone: user.phone || "",
        password: "",
        photo: user.photo || null,
      });
    };

    fetchUser();
  }, [id]);

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
    editOneUser(id, form);
    console.log(form);
    navigate("/User");
  };

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
      <h2>Edit User</h2>
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
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </React.Fragment>
  );
};

export default UserEdit;

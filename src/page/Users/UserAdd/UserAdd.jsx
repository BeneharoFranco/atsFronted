import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  TextField,
  Button,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { createOneUser  } from "../../../services/userService";

const UserAdd = ({ open, handleClose, onUpdate }) => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    role: "",
    email: "",
    phone: "",
    photo: null,
    password: "1234",
  });

  const [error, setError] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const { id, name, value } = event.target;
    setForm({
      ...form,
      [id || name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createOneUser(form);
    onUpdate();
    handleClose();
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
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add User</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
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
            <RadioGroup
              name="role"
              value={form.role}
              onChange={handleChange}
              row
            >
              <FormControlLabel
                value="recruiter"
                control={<Radio />}
                label="Recruiter"
              />
              <FormControlLabel
                value="admin"
                control={<Radio />}
                label="Admin"
              />
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
  );
};

UserAdd.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  onUpdate: PropTypes.func,
};

export default UserAdd;

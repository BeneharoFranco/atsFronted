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
import { getOneUser, editOneUser } from "../../../services/userService";

const UserEdit = ({ open, handleClose, userId, onUpdate }) => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    role: "",
    email: "",
    phone: "",
    photo: null,
  });

  const [error, setError] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getOneUser(userId);
      setForm({
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        role: user.role || "",
        email: user.email || "",
        phone: user.phone || "",
        photo: user.photo || null,
      });
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  const handleChange = (event) => {
    const { id, name, value } = event.target;
    setForm({
      ...form,
      [id || name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await editOneUser(userId, form);
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
      <DialogTitle>Edit User</DialogTitle>
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

export default UserEdit;

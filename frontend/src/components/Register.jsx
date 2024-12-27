import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, FormControl, RadioGroup, FormControlLabel, Radio, Select, MenuItem, InputLabel, FormHelperText, Box, Typography } from '@mui/material';

const Register = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh" bgcolor="#f0f0f0">
      <Box bgcolor="white" borderRadius="8px" boxShadow={3} p={4} width="100%" maxWidth="400px">
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Register
        </Typography>
        <form>
          <TextField
            label="Name"
            name="name"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Mobile Number"
            name="mobile"
            type="text"
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <FormControl component="fieldset" margin="normal" fullWidth>
            <Typography variant="body1" color="textSecondary">
              Role
            </Typography>
            <RadioGroup row name="role">
              <FormControlLabel value="student" control={<Radio />} label="Student" />
              <FormControlLabel value="teacher" control={<Radio />} label="Teacher" />
            </RadioGroup>
          </FormControl>

          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel>Batch</InputLabel>
            <Select name="batch" label="Batch">
              <MenuItem value="batch1">Batch 1</MenuItem>
              <MenuItem value="batch2">Batch 2</MenuItem>
              <MenuItem value="batch3">Batch 3</MenuItem>
            </Select>
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Register
          </Button>
        </form>

        <Box display="flex" justifyContent="center" gap={1} mt={2}>
          <Typography variant="body2">Already have an account?</Typography>
          <Link to="/login">
            <Typography variant="body2" color="primary">
              Login
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;

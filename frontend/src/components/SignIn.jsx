import React from 'react';
import { Container, Box, TextField, Button, Typography, Link } from '@mui/material';

const SignIn = () => {
  return (
    <Container maxWidth="sm" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh'}}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="50vh"
        bgcolor="grey.100"
        p={3}
        borderRadius={2}
        boxShadow={3}
        mx="auto"
      >
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Sign In
        </Typography>
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          fullWidth
          margin="dense"
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="dense"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, py: 1 }}
        >
          Login
        </Button>
        <Typography mt={2} textAlign="center" color="text.secondary">
          Don’t have an account?{' '}
          <Link href="/signup" color="primary" underline="hover">
            Sign up
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default SignIn;

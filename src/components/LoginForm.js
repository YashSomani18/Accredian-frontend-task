import React, { useState } from 'react';
import { TextField, Button, Paper, Box, Typography } from '@mui/material';

function LoginForm({onToggle}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ email: '', password: '' });

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setError({ email: '', password: '' }); 

    
    if (!isValidEmail(email)) {
        setError(prev => ({ ...prev, email: 'Invalid email format' }));
        return;
      }
  
      
      if (!isPasswordValid(password)) {
        setError(prev => ({ ...prev, password: 'Password must be at least 8 characters, include an uppercase letter and a special character' }));
        return;
      }

    
    alert("You are Logged In succesfully");
    console.log('Login successful with:', email, password);
  };

  return (
    <Paper elevation={3} sx={{ padding: 2, maxWidth: 400, mx: 'auto', mt: 5 }}>
      <Box component="form" onSubmit={handleLogin}>
        <Typography variant="h5">Login</Typography>
        <TextField
          label="Username or Email"
          variant="outlined"
          required
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!error.email}
          helperText={error.email}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          required
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!error.password}
          helperText={error.password}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Log In
        </Button>
        <Button sx={{ mt: 2 }} onClick={onToggle} color="secondary">
          Don't have an account? Sign up
        </Button>
      </Box>
    </Paper>
  );
}

export default LoginForm;

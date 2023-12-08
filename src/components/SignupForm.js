import React, { useState } from "react";
import { TextField, Button, Paper, Box, Typography } from "@mui/material";

function SignUpForm({onToggle}) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({username:'',email:'' , password:''});


  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*]).{8,}$/;
    return passwordRegex.test(password);
  };
  const handleSignUp = (event) => {
    event.preventDefault();
    setError({ username:'' , email: '', password: '' });

    if(username.length === 0){
        setError(prev => ({...prev , username:"Invalid Username"}))
    }

    if(!isValidEmail(email)){
        setError(prev => ({...prev , email:"Invalid email format"}))
        return;
    }

    if(!isPasswordValid(password) || password !== confirmPassword){
        setError(prev =>({...prev , password:'Password must be at least 8 characters, include an uppercase letter and a special character'}))
        return;
    }

    alert("You are SignUp Up succesfully");
    console.log('Login successful with:', email, password);


  };

  return (
    <Paper elevation={3} sx={{ padding: 2, maxWidth: 400, mx: "auto", mt: 5 }}>
      <Box component="form" onSubmit={handleSignUp}>
        <Typography variant="h5">Sign Up</Typography>
        <TextField
          label="Username"
          variant="outlined"
          required
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={!!error.username}
          helperText={error.username}
        />
        <TextField
          label="Email"
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
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          required
          fullWidth
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={!!error.password}
          helperText={error.password}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth >
          Sign Up
        </Button>
        <Button sx={{ mt: 2 }} onClick={onToggle} color="secondary">
          Already have an account? Log in
        </Button>
      </Box>
    </Paper>
  );
}

export default SignUpForm;

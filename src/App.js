import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignupForm";
import { Container, Grid } from "@mui/material";

function App() {
  const [signUp, setSignUp] = useState(false);

  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        {!signUp && (
          <Grid item xs={12} sm={6}>
            <LoginForm onToggle={() => setSignUp(true)} />
          </Grid>
        )}
        {signUp && (
          <Grid item xs={12} sm={6}>
            <SignUpForm onToggle={() => setSignUp(false)} />
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default App;

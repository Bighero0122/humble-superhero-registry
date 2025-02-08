import React from "react";
import { Container, Typography, Box } from "@mui/material";
import SuperheroForm from "./components/SuperheroForm";
import SuperheroList from "./components/SuperheroList";
import { SuperheroProvider } from "./context/SuperheroContext";

function App() {
  return (
    <SuperheroProvider>
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Humble Superhero Registry
          </Typography>
          <SuperheroForm />
          <Box sx={{ mt: 4 }}>
            <SuperheroList />
          </Box>
        </Box>
      </Container>
    </SuperheroProvider>
  );
}

export default App;

import React, { useState } from "react";
import { TextField, Button, Box, Alert, CircularProgress } from "@mui/material";
import { useSuperhero } from "../context/SuperheroContext";

const SuperheroForm: React.FC = () => {
  const { addSuperhero, loading } = useSuperhero();
  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState("");
  const [humilityScore, setHumilityScore] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    const score = Number(humilityScore);
    if (score < 1 || score > 10 || !Number.isInteger(score)) {
      setFormError("Humility score must be an integer between 1 and 10");
      return;
    }

    try {
      await addSuperhero({
        name,
        superpower,
        humilityScore: score,
      });

      // Reset form on success
      setName("");
      setSuperpower("");
      setHumilityScore("");
    } catch (error) {
      setFormError("Failed to add superhero. Please try again.");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
        margin: "0 auto",
      }}
    >
      {formError && <Alert severity="error">{formError}</Alert>}
      <TextField
        label="Superhero Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        disabled={loading}
      />
      <TextField
        label="Superpower"
        value={superpower}
        onChange={(e) => setSuperpower(e.target.value)}
        required
        disabled={loading}
      />
      <TextField
        label="Humility Score (1-10)"
        type="number"
        value={humilityScore}
        onChange={(e) => setHumilityScore(e.target.value)}
        required
        inputProps={{ min: 1, max: 10 }}
        disabled={loading}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : "Add Superhero"}
      </Button>
    </Box>
  );
};

export default SuperheroForm;

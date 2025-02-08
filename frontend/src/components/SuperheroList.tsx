import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Alert,
  Box,
} from "@mui/material";
import { useSuperhero } from "../context/SuperheroContext";

const SuperheroList: React.FC = () => {
  const { superheroes, loading, error } = useSuperhero();

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" my={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  if (superheroes.length === 0) {
    return (
      <Alert severity="info">
        No superheroes found. Be the first to add one!
      </Alert>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Superpower</TableCell>
            <TableCell>Humility Score</TableCell>
            <TableCell>Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {superheroes.map((hero) => (
            <TableRow key={hero.id}>
              <TableCell>{hero.name}</TableCell>
              <TableCell>{hero.superpower}</TableCell>
              <TableCell>{hero.humilityScore}</TableCell>
              <TableCell>{new Date(hero.createdAt).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SuperheroList;

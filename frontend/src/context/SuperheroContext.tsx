import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

interface Superhero {
  id: string;
  name: string;
  superpower: string;
  humilityScore: number;
  createdAt: string;
}

interface SuperheroContextType {
  superheroes: Superhero[];
  loading: boolean;
  error: string | null;
  addSuperhero: (
    superhero: Omit<Superhero, "id" | "createdAt">
  ) => Promise<void>;
}

const SuperheroContext = createContext<SuperheroContextType | undefined>(
  undefined
);

const API_URL = "http://localhost:3001";

export const SuperheroProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSuperheroes = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/superheroes`);
      setSuperheroes(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch superheroes");
      console.error("Error fetching superheroes:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSuperheroes();
  }, []);

  const addSuperhero = async (
    superhero: Omit<Superhero, "id" | "createdAt">
  ) => {
    try {
      setLoading(true);
      await axios.post(`${API_URL}/superheroes`, superhero);
      await fetchSuperheroes();
      setError(null);
    } catch (err) {
      setError("Failed to add superhero");
      console.error("Error adding superhero:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SuperheroContext.Provider
      value={{ superheroes, loading, error, addSuperhero }}
    >
      {children}
    </SuperheroContext.Provider>
  );
};

export const useSuperhero = () => {
  const context = useContext(SuperheroContext);
  if (context === undefined) {
    throw new Error("useSuperhero must be used within a SuperheroProvider");
  }
  return context;
};

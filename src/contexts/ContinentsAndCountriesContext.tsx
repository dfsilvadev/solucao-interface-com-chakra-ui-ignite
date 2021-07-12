import { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";
import { api } from "../services/api";

interface Continents {
  id: number;
  name: string;
  description: string;
  bg_url: string;
}

interface ContinentsAndCountriesProviderProps {
  children: ReactNode;
}

interface ContinentsAndCountriesData {
  continents: Continents[];
  getCountries;
}

const ContinentsAndCountriesContext = createContext({});

export function ContinentsAndCountriesProvider({
  children,
}: ContinentsAndCountriesProviderProps) {
  const [continents, setContinents] = useState<Continents[]>([]);

  async function getCountries(continent: string) {
    const response = await api
      .get("countries")
      .then((response) => response.data);

    console.log(response);
  }

  useEffect(() => {
    api.get("continents").then((response) => setContinents(response.data));
  }, []);

  return (
    <ContinentsAndCountriesContext.Provider value={{ continents }}>
      {children}
    </ContinentsAndCountriesContext.Provider>
  );
}

export default ContinentsAndCountriesContext;

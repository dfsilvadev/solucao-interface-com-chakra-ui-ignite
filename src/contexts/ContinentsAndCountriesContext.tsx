import { useEffect, useState } from "react";
import { createContext } from "react";
import { api } from "../services/api";

const ContinentsAndCountriesContext = createContext({});

type Continents = {
  id: number;
  name: string;
  description: string;
  bg_url: string;
};

export function ContinentsAndCountriesProvider({ children }) {
  const [continents, setContinents] = useState<Continents[]>([]);

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

import { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";
import { api } from "../services/api";

interface Continents {
  id: number;
  name: string;
  description: string;
  bg_url: string;
}

type Country = {
  id: number;
  name: string;
  capital: string;
  capa?: string;
  flag?: string;
};

type CountryByContinent = {
  id: number;
  name: string;
  description: string;
  bg_url: string;
  countries: Country[];
};

interface ContinentsAndCountriesProviderProps {
  children: ReactNode;
}

interface ContinentsAndCountriesData {
  continents: Continents[];
  countries: CountryByContinent[];
}

const ContinentsAndCountriesContext = createContext(
  {} as ContinentsAndCountriesData
);

export function ContinentsAndCountriesProvider({
  children,
}: ContinentsAndCountriesProviderProps) {
  const [continents, setContinents] = useState<Continents[]>([]);
  const [countries, setCountries] = useState<CountryByContinent[]>([]);

  useEffect(() => {
    api.get("countries").then((response) => setCountries(response.data));
  }, []);

  async function getCountries() {}

  useEffect(() => {
    api.get("continents").then((response) => setContinents(response.data));
  }, []);

  return (
    <ContinentsAndCountriesContext.Provider value={{ continents, countries }}>
      {children}
    </ContinentsAndCountriesContext.Provider>
  );
}

export default ContinentsAndCountriesContext;

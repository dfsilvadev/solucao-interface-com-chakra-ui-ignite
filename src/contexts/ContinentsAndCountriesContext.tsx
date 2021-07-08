import { createContext } from "react";

const ContinentsAndCountriesContext = createContext([]);

export function ContinentsAndCountriesProvider({ children }) {
  return (
    <ContinentsAndCountriesContext.Provider value={[]}>
      {children}
    </ContinentsAndCountriesContext.Provider>
  );
}

export default ContinentsAndCountriesContext;

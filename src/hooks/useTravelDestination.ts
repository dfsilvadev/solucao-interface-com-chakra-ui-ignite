import { useContext } from "react";
import ContinentsAndCountriesContext from "../contexts/ContinentsAndCountriesContext";

const useTravelDestination = () => useContext(ContinentsAndCountriesContext);

export default useTravelDestination;

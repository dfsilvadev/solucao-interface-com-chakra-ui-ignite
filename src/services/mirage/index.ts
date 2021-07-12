import { createServer, Model } from "miragejs";

import {
  dataContinents,
  dataCountriesByContinent,
} from "../../utils/dataUtils";

type Continent = {
  id: number;
  name: string;
  description: string;
  bg_url: string;
};

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

export function makeServer() {
  const server = createServer({
    models: {
      continent: Model.extend<Continent>({} as Continent),
      country: Model.extend<CountryByContinent>({} as CountryByContinent),
    },

    routes() {
      this.namespace = "api";
      this.get("/continents", () => dataContinents);
      this.get("/countries", () => dataCountriesByContinent);
      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}

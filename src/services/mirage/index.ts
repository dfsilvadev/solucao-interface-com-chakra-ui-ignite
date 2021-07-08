import { createServer, Model } from "miragejs";

import { dataContinents } from "../../utils/dataContinents";

type Continent = {
  id: number;
  name: string;
  description: string;
  bg_url: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      continent: Model.extend<Continent>({} as Continent),
    },

    routes() {
      this.namespace = "api";
      this.get("/continents", () => {
        return dataContinents;
      });
      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}

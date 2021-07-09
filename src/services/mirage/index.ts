import { createServer, Model } from "miragejs";

import { dataContinents } from "../../utils/dataContinents";

type Continents = {
  id: number;
  name: string;
  description: string;
  bg_url: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      continent: Model.extend<Continents>({} as Continents),
    },

    routes() {
      this.namespace = "api";
      this.get("/continents", () => dataContinents);
      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}

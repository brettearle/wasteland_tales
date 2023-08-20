import { makeApp } from "./app.js";
import { makeRouter } from "./router/makeRouter.js";

import { IAppServices } from "./config/types/interfaces.js";

//this houses the services used by the app
//this allows the services to be swapped out easily
const AppServices: IAppServices = {
  port: Number(process.env.PORT) || 2222,
  router: makeRouter(),
};

const server = makeApp(AppServices);

console.log("server running on: ", AppServices.port);

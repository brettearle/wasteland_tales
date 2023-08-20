import { makeApp } from "./app.js";
import { IAppServices } from "./config/types/interfaces.js";

const AppServices: IAppServices = {
  port: Number(process.env.PORT) || 2222,
};

const server = makeApp(AppServices);

console.log("server running on: ", AppServices.port);

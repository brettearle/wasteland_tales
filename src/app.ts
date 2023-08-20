import express from "express";
import { Server } from "http";
import { IAppServices } from "./config/types/interfaces.js";

//This is done to be main app builder
//Helps with dependency injection
function makeApp(services: IAppServices): Server {
  const app = express();

  app.use(services.router);

  const listener = app.listen(services.port);
  return listener;
}

export { makeApp };

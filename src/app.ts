import express, { Router } from "express";
import { Server } from "http";

function makeApp(port: number, router?: Router): Server {
  const app = express();
  if (router) {
    app.use(router);
  }
  const listener = app.listen(port);
  return listener;
}

export { makeApp };

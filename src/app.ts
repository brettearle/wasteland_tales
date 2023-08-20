import express from "express";
import { Server } from "http";

function makeApp(port: number): Server {
  const app = express();
  const listener = app.listen(port);
  return listener;
}

export { makeApp };

import { Router } from "express";

export interface IAppServices {
  port: number;
  router: Router;
}

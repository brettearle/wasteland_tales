import { Router } from "express";
import { deckRouter } from "./deckRouter.js";

function makeRouter() {
  const router = Router();
  router.use(deckRouter);
  router.get("/", (req, res) => {
    res.status(200).send({ route: "/" });
  });

  return router;
}

export { makeRouter };

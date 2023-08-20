import { Router } from "express";
import { makeDeck } from "../services/deck/makeDeck.js";

const deckRouter = Router();

deckRouter.get("/deck", (req, res) => {
  res.status(200).send({ deck: makeDeck() });
});

export { deckRouter };

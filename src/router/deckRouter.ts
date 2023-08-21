import { Router } from "express";
import { poker } from "../services/deck/makeDeck.js";

const deckRouter = Router();

//new poker deck route
deckRouter.get("/deck/npoker", (req, res) => {
  res.status(200).send({ deck: poker.makeDeck() });
});

export { deckRouter };

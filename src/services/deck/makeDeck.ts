import { ICard } from "../../config/types/interfaces.js";

const makeDeck = () => {
  const deck: ICard[] = [{ suit: "clubs", face: "ace" }];
  return deck;
};

export { makeDeck };

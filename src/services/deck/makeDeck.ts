import { Deck, IDeck } from "../../config/types/interfaces.js";

const poker: IDeck = {
  makeDeck: () => {
    const deck: Deck = [{ suit: "clubs", face: "ace" }];
    return deck;
  },
};

export { poker };

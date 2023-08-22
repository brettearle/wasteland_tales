import { Deck, ICard, IDeck } from "../../config/types/interfaces.js";

const poker: IDeck = {
  makeDeck: () => {
    let deck: Deck = new Array<ICard>(54);
    console.log(deck);
    const hardCoded: ICard[] = [
      { suit: "clubs", face: "ace" },
      { suit: "clubs", face: "ace" },
    ];
    hardCoded.forEach((v, i) => {
      deck[i] = v;
    });
    return deck;
  },
};

export { poker };

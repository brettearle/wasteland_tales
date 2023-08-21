import { Deck } from "../../config/types/interfaces";
import { poker } from "../../services/deck/makeDeck";

describe("makeDeck", () => {
  test("should return a deck object", () => {
    const got = poker.makeDeck();
    //should test the object structure and length of array
    const want: Deck = [{ suit: "clubs", face: "ace" }];
    expect(got).toStrictEqual(want);
  });
});

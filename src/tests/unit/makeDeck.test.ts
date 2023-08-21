import { ICard } from "../../config/types/interfaces";
import { makeDeck } from "../../services/deck/makeDeck";

describe("makeDeck", () => {
  test("should return a deck object", () => {
    const got = makeDeck();
    //should test the object structure and length of array
    const want: ICard[] = [{ suit: "clubs", face: "ace" }];
    expect(got).toStrictEqual(want);
  });
});

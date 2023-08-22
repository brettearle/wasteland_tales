import { poker } from "../../services/deck/makeDeck";

describe("makeDeck", () => {
  test("should return a deck array containing objects with suit and face keys", () => {
    const got = poker.makeDeck();
    //should test the object structure and length of array
    expect(got[0]).toHaveProperty("suit");
    expect(got[0]).toHaveProperty("face");
    expect(got[1]).toHaveProperty("suit");
    expect(got[1]).toHaveProperty("face");
  });
  test("returns a 54 length array", () => {
    const got = poker.makeDeck();
    expect(got.length).toBe(54);
  });
});

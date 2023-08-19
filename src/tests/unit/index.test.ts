import { Hello } from "../../index";

describe("index.ts", () => {
  test("should return hello", () => {
    const got = Hello();
    const want = "hello";
    expect(got).toBe(want);
  });
});

import { Vec2 } from "../vectors/Vec2";
import { vectorLength } from "./vectorLength";

describe("vectorLengtth", () => {
  it("gets the length of a vector.", () => {
    const inputVector = new Vec2(1, 2);
    const sum = vectorLength(inputVector);

    expect(sum).toEqual(3);
  });
});

import { Vec2 } from "../vectors/Vec2";
import { sumVector } from "./sumVector";

describe("sumVector", () => {
  it("sums the values in a vector.", () => {
    const inputVector = new Vec2(1, 2);
    const sum = sumVector(inputVector);

    expect(sum).toEqual(3);
  });
});

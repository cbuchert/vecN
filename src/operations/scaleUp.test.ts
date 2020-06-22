import { Vec2 } from "../vectors/Vec2";
import { scaleUp } from "./scaleUp";

describe("scaleUp", () => {
  it("scales up a vector by some factor.", () => {
    const inputVector = new Vec2(2, 3);
    const scaleFactor = 2;
    const outputVector = scaleUp(inputVector, scaleFactor);

    // @ts-ignore
    expect(outputVector.x).toEqual(4);
    // @ts-ignore
    expect(outputVector.y).toEqual(6);
  });
});

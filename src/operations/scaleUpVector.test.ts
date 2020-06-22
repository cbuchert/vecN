import { Vec2 } from "../vectors/Vec2";
import { scaleUpVector } from "./scaleUpVector";

describe("scaleUpVector", () => {
  it("scales up a vector by some factor.", () => {
    const inputVector = new Vec2(2, 3);
    const scaleFactor = 2;
    const outputVector = scaleUpVector(inputVector, scaleFactor);

    // @ts-ignore
    expect(outputVector.x).toEqual(4);
    // @ts-ignore
    expect(outputVector.y).toEqual(6);
  });
});

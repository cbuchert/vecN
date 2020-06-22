import { Vec2 } from "../vectors/Vec2";
import { scaleDown } from "./scaleDown";

describe("scaleDown", () => {
  it("scales a vector down by a scale factor.", () => {
    const inputVector = new Vec2(10, 20);
    const scaleFactor = 10;
    const outputVector = scaleDown(inputVector, scaleFactor);

    // @ts-ignore
    expect(outputVector.x).toEqual(1);
    // @ts-ignore
    expect(outputVector.y).toEqual(2);
  });
});

import { Vec2 } from "../vectors/Vec2";
import { multiply } from "./multiply";

describe("multiply", () => {
  it("multiplies two vectors.", () => {
    const inputVector = new Vec2(2, 3);
    const outputVector = multiply(inputVector, inputVector);

    // @ts-ignore
    expect(outputVector.x).toEqual(4);
    // @ts-ignore
    expect(outputVector.y).toEqual(9);
  });

  it("multiplies multiple vectors.", () => {
    const inputVector = new Vec2(2, 3);
    const outputVector = multiply(inputVector, inputVector, inputVector);

    // @ts-ignore
    expect(outputVector.x).toEqual(8);
    // @ts-ignore
    expect(outputVector.y).toEqual(27);
  });
});

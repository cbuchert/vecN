import { Vec2 } from "../vectors/Vec2";
import { multiplyVectors } from "./multiplyVectors";

describe("multiplyVectors", () => {
  it("multiplies two vectors.", () => {
    const inputVector = new Vec2(2, 3);
    const outputVector = multiplyVectors(inputVector, inputVector);

    // @ts-ignore
    expect(outputVector.x).toEqual(4);
    // @ts-ignore
    expect(outputVector.y).toEqual(9);
  });

  it("multiplies multiple vectors.", () => {
    const inputVector = new Vec2(2, 3);
    const outputVector = multiplyVectors(inputVector, inputVector, inputVector);

    // @ts-ignore
    expect(outputVector.x).toEqual(8);
    // @ts-ignore
    expect(outputVector.y).toEqual(27);
  });
});

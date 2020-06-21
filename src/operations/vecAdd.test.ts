import { Vec2 } from "../vectors/Vec2";
import { vecAdd } from "./vecAdd";

describe("vecAdd", () => {
  it("adds two vectors of the same type.", () => {
    const inputVector = new Vec2(1, 2);
    const outputVector = vecAdd(inputVector, inputVector);

    // @ts-ignore
    expect(outputVector.x).toEqual(2);
    // @ts-ignore
    expect(outputVector.y).toEqual(4);
  });

  it("adds multiple vectors of the same type.", () => {
    const inputVector = new Vec2(1, 2);
    const outputVector = vecAdd(inputVector, inputVector, inputVector);

    // @ts-ignore
    expect(outputVector.x).toEqual(3);
    // @ts-ignore
    expect(outputVector.y).toEqual(6);
  });
});

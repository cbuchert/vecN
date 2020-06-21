import { Vec2 } from "../vectors/Vec2";
import { vecSubtract } from "./vecSubtract";

describe("vecSubtract", () => {
  it("subtracts two vectors.", () => {
    const inputVector = new Vec2(1, 2);
    const outputVector = vecSubtract(inputVector, inputVector);

    expect(outputVector.x).toEqual(0);
    expect(outputVector.y).toEqual(0);
  });

  it("subtracts multiple vectors.", () => {
    const inputVector = new Vec2(1, 2);
    const outputVector = vecSubtract(inputVector, inputVector, inputVector);

    expect(outputVector.x).toEqual(-1);
    expect(outputVector.y).toEqual(-2);
  })
});

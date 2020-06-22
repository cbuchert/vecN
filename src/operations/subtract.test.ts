import { Vec2 } from "../vectors/Vec2";
import { subtract } from "./subtract";

describe("subtract", () => {
  it("subtracts two vectors.", () => {
    const inputVector = new Vec2(1, 2);
    const outputVector = subtract(inputVector, inputVector);

    // @ts-ignore
    expect(outputVector.x).toEqual(0);
    // @ts-ignore
    expect(outputVector.y).toEqual(0);
  });

  it("subtracts multiple vectors.", () => {
    const inputVector = new Vec2(1, 2);
    const outputVector = subtract(inputVector, inputVector, inputVector);

    // @ts-ignore
    expect(outputVector.x).toEqual(- 1);
    // @ts-ignore
    expect(outputVector.y).toEqual(- 2);
  });
});

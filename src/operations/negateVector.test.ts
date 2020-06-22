import { Vec2 } from "../vectors/Vec2";
import { negateVector } from "./negateVector";

describe("negateVector", () => {
  it("negates a vector.", () => {
    const inputVector = new Vec2(1, 2);
    const outputVector = negateVector(inputVector);

    // @ts-ignore
    expect(outputVector.x).toEqual(- 1);
    // @ts-ignore
    expect(outputVector.y).toEqual(- 2);
  });
});

import { Vec2 } from "../vectors/Vec2";
import { invertVector } from "./invertVector";

describe("invertVector", () => {
  it("inverts a vector.", () => {
    const inputVector = new Vec2(2, 4);
    const outputVector = invertVector(inputVector);

    // @ts-ignore
    expect(outputVector.x).toEqual(.5);
    // @ts-ignore
    expect(outputVector.y).toEqual(.25);
  });
});

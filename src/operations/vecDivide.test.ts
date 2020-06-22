import { Vec2 } from "../vectors/Vec2";
import { vecDivide } from "./vecDivide";

describe("vecDivide", () => {
  it("divides 1 vector by another.", () => {
    const inputVector = new Vec2(2, 3);
    const outputVector = vecDivide(inputVector, inputVector);

    // @ts-ignore
    expect(outputVector.x).toEqual(1);
    // @ts-ignore
    expect(outputVector.y).toEqual(1);
  });

  it("divides multiple vectors.", () => {
    const inputVector1 = new Vec2(100, 1000);
    const inputVector2 = new Vec2(10, 100);
    const inputVector3 = new Vec2(10, 10);
    const outputVector = vecDivide(inputVector1, inputVector2, inputVector3);

    // @ts-ignore
    expect(outputVector.x).toEqual(1);
    // @ts-ignore
    expect(outputVector.y).toEqual(1);
  });
});

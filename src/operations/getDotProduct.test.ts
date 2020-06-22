import { Vec2 } from "../vectors/Vec2";
import { getDotProduct } from "./getDotProduct";

describe("getDotProduct", () => {
  it("returns the dot product of two vectors.", () => {
    const inputVector = new Vec2(2, 3);
    const dotProduct = getDotProduct(inputVector, inputVector);

    expect(dotProduct).toEqual(13);
  });

  it("returns the dot product of multiple vectors.", () => {
    const inputVector = new Vec2(2, 3);
    const dotProduct = getDotProduct(inputVector, inputVector, inputVector);

    expect(dotProduct).toEqual(35);
  });
});

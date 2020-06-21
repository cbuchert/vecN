import { VecN } from "./VecN";

describe("VecN", () => {
  it("returns a class instance with provided keys and values.", () => {
    const keys = [ "a", "b" ];
    const values = [ 1, 2 ];
    const vecN = new VecN(keys, values);

    // @ts-ignore
    expect(vecN.a).toEqual(1);
  });
});

import { VecN } from "../vectors/VecN";

export function invertVector(vector: VecN): VecN {
  const keys = [ ...vector.keys ];
  const values = vector.values.map(value => 1 / value);

  return new VecN(keys, values);
}

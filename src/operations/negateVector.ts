import { VecN } from "../vectors/VecN";

export function negateVector(vector: VecN): VecN {
  const keys = [ ...vector.keys ];
  const values = vector.values.map(value => - value);

  return new VecN(keys, values);
}

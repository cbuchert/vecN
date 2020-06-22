import { VecN } from "../vectors/VecN";

export function scaleUp(vector: VecN, scaleFactor: number): VecN {
  const keys = [ ...vector.keys ];
  const values = vector.values.map(value => value * scaleFactor);

  return new VecN(keys, values);
}

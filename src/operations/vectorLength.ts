import { VecN } from "../vectors/VecN";

export function vectorLength(vector: VecN): number {
  return vector.values.reduce((acc, curr) => acc + curr, 0);
}

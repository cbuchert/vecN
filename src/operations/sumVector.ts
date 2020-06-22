import { VecN } from "../vectors/VecN";

export function sumVector(vector: VecN): number {
  return vector.values.reduce((acc, curr) => acc + curr, 0);
}

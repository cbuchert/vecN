import { VecN } from "../vectors/VecN";
import { multiplyVectors } from "./multiplyVectors";
import { sumVector } from "./sumVector";

export function getDotProduct(...params: VecN[]): number {
  return sumVector(multiplyVectors(...params));
}

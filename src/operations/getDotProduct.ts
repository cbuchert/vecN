import { VecN } from "../vectors/VecN";
import { multiplyVectors } from "./multiplyVectors";
import { vectorLength } from "./vectorLength";

export function getDotProduct(...params: VecN[]): number {
  return vectorLength(multiplyVectors(...params));
}

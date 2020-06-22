import { VecN } from "../vectors/VecN";
import { multiply } from "./multiply";
import { sumVector } from "./sumVector";

export function getDotProduct(...params: VecN[]): number {
  return sumVector(multiply(...params));
}

import { VecN } from "./VecN";
import { types } from "../type";

export class Vec2 extends VecN {
  constructor(x: number, y: number) {
    super(types.vec2, [ x, y ]);
  }
}

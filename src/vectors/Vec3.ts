import { VecN } from "./VecN";
import { types } from "../type";

export class Vec3 extends VecN {
  constructor(x: number, y: number, z: number) {
    super(types.vec3, [ x, y, z ]);
  }
}

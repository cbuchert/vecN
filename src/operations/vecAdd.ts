import { VecN } from "../vectors/VecN";

export function vecAdd(...params: VecN[]): VecN {
  // TODO: Check params to make sure they're all vectors of the same length.
  const keys = [...params[ 0 ].keys];
  const values = params.reduce((vectorSums, currentVector) => {
    return vectorSums.map((value, i) => value + currentVector.values[ i ]);
  }, new Array(params[ 0 ].length).fill(0));

  return new VecN(keys, values);
}

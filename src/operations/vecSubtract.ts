import { VecN } from "../vectors/VecN";

export function vecSubtract(...params: VecN[]): VecN {
  const keys = params[ 0 ].keys;
  const values = params.reduce((vectorSums, currentVector, i) => {
    if (i === 0) return vectorSums;

    return vectorSums.map((value, j) => value - currentVector.values[ j ]);
  }, params[ 0 ].values);

  return new VecN(keys, values);
}
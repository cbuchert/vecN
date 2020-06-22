import { VecN } from "../vectors/VecN";

export function vecSubtract(...params: VecN[]): VecN {
  // TODO: Check params to make sure they're all vectors of the same length.
  const keys = [...params[ 0 ].keys];
  const values = params.reduce((vectorDifferences, currentVector, i) => {
    if (i === 0) return vectorDifferences;

    return vectorDifferences.map((value, j) => value - currentVector.values[ j ]);
  }, [...params[ 0 ].values]);

  return new VecN(keys, values);
}

import { VecN } from "../vectors/VecN";

export function vecMultiply(...params: VecN[]): VecN {
  const keys = [ ...params[ 0 ].keys ];
  const values = params.reduce((vectorProducts, currentVector) => {
    return vectorProducts.map((value, i) => value * currentVector.values[ i ]);
  }, new Array(params[ 0 ].length).fill(1));

  return new VecN(keys, values);
}

import { VecN } from "../vectors/VecN";

export function divide(...params: VecN[]): VecN {
  const keys = [ ...params[ 0 ].keys ];
  const values = params.reduce((vectorQuotient, currentVector, i) => {
    if (i === 0) return vectorQuotient;

    return vectorQuotient.map((value, j) => value / currentVector.values[ j ]);
  }, [ ...params[ 0 ].values ]);

  return new VecN(keys, values);
}

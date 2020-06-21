export class VecN {
  keys: any[];
  values: number[];
  length: number;

  constructor(keys: any[], values: number[]) {
    this.keys = keys;
    this.values = values;
    this.length = keys.length;
    // @ts-ignore
    keys.forEach((key, i) => this[ key ] = values[ i ]);
  }
}

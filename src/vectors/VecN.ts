export class VecN {
  constructor(keys: any[], values: number[]) {
    // @ts-ignore
    keys.forEach((key, i) => this[ key ] = values[ i ]);
  }
}

export function check(arr: number[], fn: (x: number) => boolean): boolean {
  //return typeof arr === "number" ? arr.filter(x:number=>x>3): arr.filter()
  // console.log(typeof arr);
  // return arr.filter(x => {
  //   if (typeof x === "number") {
  //     return x > 3;
  //   }
  //   if (typeof x === "string") return x.length >= 1;
  // });
  //return arr.map(x => x * 2);
  const arr1 = arr.filter(fn);
  return arr.length === arr1.length;
}

//console.log(check(["a", "d", "b"]));

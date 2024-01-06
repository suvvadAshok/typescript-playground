1.Functional Programming: which is used to work on functions.

---

3.Given program is not a pure function.
It gives side effect through "console.log()".

---

6.Map
Filter
Reduce
pick

---

7. function pick<T extends object, K extends keyof T>(obj: T,[k1,k2,k3]:K):T{}

function deepFlatten(arr: any):[]{}

function chain<T>(iter1: any, iter2:any, iter3:any)IterableIterator<T>{}

function merge(first:T[],second:T[]):T[]{}

function slice<T>(arr:T[])(start:number,stop:number):arr[]){}

---

8.imperative shell used to make the code more pure functionally my take out the side effects,
function core is where we write the pure functions to get desire output
mostly these combination only gives good suitable program

---

9. readonly is used for make variables as immutable
   so we can not change the original data. but we can work on it by create a duplicate of it.

---

10.invariant is used to make sure the inputs from the user are to be correct.
if user gives falsy inputs than code must be give error, than only it works properly.

---

11.import {z} from 'zod'
const strSchema = z.string;
const numSchema = z.number.int();

---

12.const merge = (obj1, obj2) => {
const key1 = Object.keys(obj1);
const key2 = Object.keys(obj2);

for (const e of key1) {
if (e in key2) {
obj1[e] = obj2[e];
}
}
return obj1;
};

const insert = (arr, index, value) => {
arr[index] = value;
return arr;
};
const set = (obj, key, value) => {
const output = {};
let i = 0;
for (const e of key) {
if (e in Object.keys(obj)) {
output[e] = value[i++];
}
}
};

const sum = arr => {
return pipe(
arr,
reduce((sum, i) => sum + i),
0
);
};

---

13.function rename(obj1, obj2) {
const val1 = Object.values(obj1);
const val2 = Object.values(obj2);
const obj = {};
let i = 0;
for (const e of val1) {
obj[e] = val2[i++];
}
return obj;
}

rename({ a: 1, b: 2 }, { a: "x", b: "y" });

1. function\* filterPrimeNumbers(numbers: readonly number[]): IterableIterator<number>

2. ```ts
   type Rectangle = {
     top: Required<number>;
     left: Required<number>;
     width?: Partial<number>;
     height?: Partial<number>;
   };
   ```

3. ```ts
   type FOO = number | string | null;
   function fun(foo: FOO) {
     foo = 100;
     foo = "hello";
     foo = null;
   }
   ```

4. ````ts
   type obj = { x: number; y: string };
       function get<T extends obj, U extends keyof T>(X: T, key: U): number | string {
       return X[key];
       }
       const x = get({ x: 1, y: "hello" }, "x");
       const y = get({ x: 1, y: "hello" }, "y");
       ```

   ````

5. ```ts
   `foo` type is `{x:number, y:string} `
   ```

6. ```ts
   function foo(x: string, y: number) {
     return [y, x];
   }
   ```

7. ```ts
   type action =
     | { state: "load"; name: string }
     | { state: "action"; play: string }
     | { state: "score"; total: number };
   ```

8. ```ts
   type NUMorSTR = number | string;
   function addNumberOrString(numOrString: NUMorSTR): NUMorSTR {
     return typeof numOrString === "number"
       ? numOrString + 1
       : numOrString + "ashok";
   }
   ```

9. function times(n: number, bar?: () => void) {
   /// implementation
   }

10. ```ts
    type point = readonly [number, number];
    function distance(a: point, b: point): number {
    return Math.sqrt(square(b[0] - a[0]) + square(b[1] - a[1]));
    }
    function square(num: number): number {
    return num \* num;
    }
    ```

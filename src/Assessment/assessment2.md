---
1.

```export function equals<T>(fst: Iterable<T>, snd: Iterable<T>): boolean {
  let count = 0;
  for (const fstel of fst) {
    for (const sndel of snd) {
      if (fstel === sndel) {
        count++;
        break;
      }
    }
  }
  return count === [...fst].length;
}```

```

export function equals<T>(fst: Iterable<T>, snd: Iterable<T>): boolean {
  for (const fstel of fst) {
    if (!isThere(fstel, snd)) return false;
  }
  return true;
}
function isThere<T>(fstel: T, snd: Iterable<T>) {
  for (const ele of snd) {
    if (fstel === ele) return true;
  }
  return false;
}
```
---

2.

for product
first we get range of elements r = [1,2,3,4];
in pipe
1 -> map -> 3 -> acc = 3;
2 -> map -> 4 -> acc = 12;
3 -> map -> 5 -> acc = 60;
4 -> map -> 6 -> acc = 360;

finally product = 360;

for sum
similarly r = [1,2,3,4] only
in pipe
1 -> map -> 2 -> acc = 2;
2 -> map -> 4 -> acc = 6;
3 -> map -> 6 -> acc = 12;
4 -> map -> 8 -> acc = 20;

finally sum = 20;

## output is {360,20};

3.

```
import {z} from 'zod';
let rectSchema = z.number();
type n = z.infer(typeof rectSchema);

type specRectangle = {
readonly left:n,
readonly top:n,
readonly width?:n,
readonly height?:n
};

```

---

4.  role attribute: browser knows the role of element.

---

5.

href is attribute in anchor tag (<a>);
in this `<a href="#">` is used to go top of the same page.

---

6.

if image is not available in given path of the file than it shows alternate text
where we give in `alt` attribute.

---

7.  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>logIN</title>
    </head>
    <body>
    <form action="">
      <table>
        <tr>
          <td>
            <label for="email">Email</label>
          </td>
          <td>
            <input type="email" placeholder="email" required><br>
          </td>
        </tr>
        <tr>
          <td>
            <label for="passWord">passWord</label>
          </td>
          <td>
            <input type="password" placeholder="passWord" required>
          </td>
        </tr>
        <tr>
          <td>
            <button type="submit">submit</button>
          </td>
        </tr>
      </table>

</form>
</body>
</html>

---

8.

```

div{
display: flex;
justify-content:center;
align-content:center;
}

```

9.

```

function foo<T, U>(args: [T, U]): [U, T] {
return [args[1], args[0]] as [U, T];
}

```

---

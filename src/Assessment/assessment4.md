1.

`current` function is give the current value of draft.
It helps in debugging, so it ok to use in production.

---

2.

`original` function gives the original value of the variable.

if there is any mutation happens in the data, than
original draft !== current draft

---

3.

`structural sharing` is possible immer

---

4.

```tsx
import { useImmerReducer } from "use-immer";
import "./Counter.css";

type State = {
  count: number;
};

type Action = Readonly<{
  type: "inc" | "dec";
}>;

function counterReducer(draft: State, action: Action) {
  action.type === "inc" ? (draft.count += 1) : (draft.count -= 1);
}

export function CounterView(): JSX.Element {
  const [state, dispatch] = useImmerReducer<State, Action>(counterReducer, {
    count: 0,
  });

  return (
    <div className="bg-color center-align flex-row">
      <div>
        <button
          onClick={() => {
            dispatch({ type: "dec" });
          }}
        >
          -
        </button>
      </div>

      <div>{state.count}</div>

      <div
        onClick={() => {
          dispatch({ type: "inc" });
        }}
      >
        <button>+</button>
      </div>
    </div>
  );
}
```

---

5.

initial object value is not changed because produce method not effect the original value.
100
200

after using produce method result assign with updated original object, so
100
400

by comparing two objects values are updated and gives below output
true
false

---

6.

`branded type` is label to schema. If we give brand to schema than it must be parse to use.

```ts
const emailSchema = z.string().email().brand<"mail">();
type email = z.infer<typeof emailSchema>;

const myMail = emailSchema.parse("ashok@gmail.com");
const gmail: email = myMail;

const randomMail: email = "ashok@gamil.com";
```

---

7.

`safeparse()` is used when we don't need to throw error after validation. But validation is important than prefer to use `parse()`

---

8.

```ts
const signUpSchema = z
  .object({
    email = z.string().email(),
    password = z.string(),
    confirmPassword = z.string(),
  })
  .refine(obj => obj.password === obj.confirmPassword, {
    message: "password and confirmPassword should match",
  });
```

---

9.

`refine()` is used to check the custom validation logic for schema

```ts
const schema = z
  .object({
    id: z.number().optional(),
    name: z.string(),
  })
  .refine(o => o.name.length > 0 && o.name.length < 255);
```

---

10.

```ts
import { z } from "zod";

const schema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("INCREMENT") }),
  z.object({ type: z.literal("DECREMENT") }),
  z.object({ type: z.literal("SET_COUNT"), payload: z.number() }),
  z.object({ type: z.literal("RESET") }),
]);
```

---

import { produce } from "immer";

export function bubleSort(arr: readonly number[]): readonly number[] {
  return produce(arr, draft => {
    for (let i = 0; i < draft.length; i++)
      for (let j = 0; j < draft.length - 1 - i; j++) {
        if (draft[j] > draft[j + 1]) {
          const temp = draft[j];
          draft[j] = draft[j + 1];
          draft[j + 1] = temp;
        }
      }
  });
}

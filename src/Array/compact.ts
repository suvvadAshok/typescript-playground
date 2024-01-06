import { bool, verify } from "@lib";
import { z } from "zod";
const arraySchema = z.any().array();

export const compact = (arr: any[]): any[] => {
  verify(arraySchema, arr);

  return arr.filter(bool);
};

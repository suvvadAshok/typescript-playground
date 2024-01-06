// import { z } from "zod";

// const numArraySchema = z.number().array().brand<"numArray">();
// type numArray = z.infer<typeof numArraySchema>;

// const parsedArray = numArraySchema.parse([1, 2, 3]);
// const array: numArray = parsedArray;

// // const a: numArray = [3, 5, 4];

// const emailSchema = z.string().email().brand<"mail">();
// type email = z.infer<typeof emailSchema>;

// const myMail = emailSchema.parse("ashok@gmail.com");
// const gmail: email = myMail;

// const randomMail: email = "ashok@gamil.com";

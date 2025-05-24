import { z } from "zod";

export const usersSchema = z.object({
  userName: z
    .string()
    .min(1, { message: "users name is required" })
    .max(50, { message: "users name must be less than 50 characters" }),
  firstName: z
    .string()
    .min(1, { message: "users code is required" })
    .max(10, { message: "users code must be less than 10 characters" }),
  lastName: z
    .string()
    .min(1, { message: "users address is required" })
    .max(100, { message: "users address must be less than 100 characters" }),
  email: z.string().email(),
  dateAdded: z.date(),
});

export type UsersType = z.infer<typeof usersSchema>;

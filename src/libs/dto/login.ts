import { z } from "zod";
import { usernameSchema } from "../schema/user";
import { createZodDto } from "nestjs-zod/dto";

export const loginSchema = z
  .object({
    identifier: z.string().transform((value) => value.toLowerCase()),
    password: z.string().min(6),
    rememberMe: z.boolean().optional().or(z.literal("indeterminate")),
  })
  .refine(
    (value) => {
      return (
        // value.identifier.includes("@")
        //   ? z.string().email().parse(value.identifier)
        //   :
        usernameSchema.parse(value.identifier)
      );
    },
    { message: "InvalidCredentials" }
  );

export class LoginDto extends createZodDto(loginSchema) {}

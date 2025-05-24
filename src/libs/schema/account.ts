import { createZodDto } from "nestjs-zod/dto";
import { z } from "zod";

const accountSchema = z.object({
  oldPassword: z.string().min(6),
  newPassword: z.string().min(6),
});

export class AccountDto extends createZodDto(accountSchema) {}

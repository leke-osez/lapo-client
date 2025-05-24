import { z } from "zod";

export const recentCardRequestSchema = z.object({
  branch: z
    .string()
    .min(1, { message: "Branch name is required" })
    .max(50, { message: "Branch name must be less than 50 characters" }),
  cardType: z
    .string()
    .min(1, { message: "Branch code is required" })
    .max(10, { message: "Branch code must be less than 10 characters" }),
  quantity: z
    .string()
    .min(1, { message: "Branch address is required" })
    .max(100, { message: "Branch address must be less than 100 characters" }),
  status: z
    .string()
    .min(1, { message: "Branch zone is required" })
    .max(50, { message: "Branch zone must be less than 50 characters" }),
});

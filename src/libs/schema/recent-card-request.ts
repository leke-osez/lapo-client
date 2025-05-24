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
  quantity: z.number(),
  status: z.enum(["ready", "pending", "in progress", "acknowledged"]),
});

export type RecentCardRequestType = z.infer<typeof recentCardRequestSchema>;

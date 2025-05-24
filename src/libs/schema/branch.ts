import { z } from "zod";

export const branchSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Branch name is required" })
    .max(50, { message: "Branch name must be less than 50 characters" }),
  code: z
    .string()
    .min(1, { message: "Branch code is required" })
    .max(10, { message: "Branch code must be less than 10 characters" }),
  address: z
    .string()
    .min(1, { message: "Branch address is required" })
    .max(100, { message: "Branch address must be less than 100 characters" }),
  zone: z
    .string()
    .min(1, { message: "Branch zone is required" })
    .max(50, { message: "Branch zone must be less than 50 characters" }),
  dateAdded: z.string(),
});

export const addBranchSchema = branchSchema
  .extend({
    area: z
      .string()
      .min(1, { message: "Branch zone is required" })
      .max(50, { message: "Branch zone must be less than 50 characters" }),
  })
  .omit({ dateAdded: true });

export type AddBranchType = z.infer<typeof addBranchSchema>;
export type BranchType = z.infer<typeof branchSchema>;

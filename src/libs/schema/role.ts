import { z } from "zod";

export const roleSchema = z.object({
  name: z
    .string()
    .min(1, { message: "role name is required" })
    .max(50, { message: "role name must be less than 50 characters" }),
  dateCreated: z
    .string()
    .min(1, { message: "role code is required" })
    .max(10, { message: "role code must be less than 10 characters" }),
});

export const createRoleSchema = z.object({
  menuName: z
    .string()
    .min(1, { message: "role name is required" })
    .max(50, { message: "role name must be less than 50 characters" }),
  full: z.boolean(),
  create: z.boolean(),
  edit: z.boolean(),
  view: z.boolean(),
  delete: z.boolean(),
});

export type RoleType = z.infer<typeof roleSchema>;
export type CreateRoleType = z.infer<typeof createRoleSchema>;

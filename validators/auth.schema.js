import { z } from "zod";

const registerSchema = z.object({
  name: z.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters"),

  email: z.string()
    .email("Please provide a valid email")
    .min(3, "Email must be at least 3 characters")
    .max(50, "Email cannot exceed 50 characters"),

  password: z.string()
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password cannot exceed 12 characters"),
});

export default registerSchema;

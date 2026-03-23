import { z } from "zod";

const registerSchema = z.object({
  name: z.string().min(3).max(50),

  email: z.string().email("Please provide a valid email").min(3).max(50),

  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default registerSchema;

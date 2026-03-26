import { z } from "zod";

const jobSchema = z.object({
  company: z
    .string({ required_error: "Please provide a company name" })
    .min(1, "Company cannot be empty")
    .max(50, "Company cannot exceed 50 characters"),

  position: z
    .string({ required_error: "Please provide a position" })
    .min(1, "Position cannot be empty")
    .max(100, "Position cannot exceed 100 characters"),

  status: z
    .enum(["interview", "declined", "pending"], {
      message: "Status should be (interview, declined or pending)",
    })
    .default("pending"),
});

export default jobSchema;

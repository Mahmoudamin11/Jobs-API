import { BadRequestError } from "../errors/index.js";

const validation = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);

  if (!result.success) {
    // Use Zod's flatten() method to get errors in a usable format
    const flattened = result.error.flatten();
    
    // Extract field errors
    const fieldErrors = Object.entries(flattened.fieldErrors)
      .map(([field, messages]) => `${field}: ${messages.join(", ")}`)
      .join(", ");
    
    const errorMessage = fieldErrors || "Validation failed";
    throw new BadRequestError(errorMessage);
  }

  req.body = result.data;
  next();
};

export default validation;

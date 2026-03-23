import { StatusCodes } from "http-status-codes";
import { CustomAPIError } from "../errors/index.js";
const errorHandlerMiddleware = (err, req, res, next) => {
  console.log("Error caught:", err);
  if (err instanceof CustomAPIError) {
    return res
      .status(err.statusCode)
      .json({ msg: err.message, stack: err.stack });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
};

export default errorHandlerMiddleware;

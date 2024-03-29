import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { RequestValidationError } from "../errors/request-validation-errors";

export const ValidateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const validationErrors = errors.array().map((error: any) => ({
      message: error.msg,
      field: error?.path
    }));
    console.log(validationErrors);
    return res.status(400).json({ status: "error", errors: validationErrors });
  }
  next();
};

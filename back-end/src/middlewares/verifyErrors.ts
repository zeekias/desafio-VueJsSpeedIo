import { Request, NextFunction, Response } from "express";
import { ICustomError } from "../interfaces/APIError/APIError.interface";

export const verifyErrors = (err: ICustomError, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(err.status).json({
      error: err.message,
    });
  }
  return res.status(500).json({
    message: 'Internal server error',
  });
};
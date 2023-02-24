import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../errors/appError";

export const authUser = (req: Request, res: Response, next: NextFunction) => {
  const bearerToken = req.headers.authorization;
  const token = bearerToken?.split(" ")[1];
  if (!token) throw new AppError(401, "Invalid token");

  jwt.verify(
    token as string,
    process.env.SECRET_KEY as string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (err, decoded: any) => {
      if (err) throw new AppError(400, "Invalid token");
      req.user = { id: decoded.sub };
      next();
    }
  );
};
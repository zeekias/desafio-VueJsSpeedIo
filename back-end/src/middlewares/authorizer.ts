import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export default function authorizer(req: Request, res: Response, next: NextFunction) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (token === undefined) return res.status(401).json({ error: "Unauthorized" });
  try {
    jwt.verify(token, 'secret');
    const data: any = jwt.decode(token);
    req.userId = data.id;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Unauthorized" });
  }
}
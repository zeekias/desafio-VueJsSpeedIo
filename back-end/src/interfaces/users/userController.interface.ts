import { Request, Response, NextFunction } from "express";
import { IUserService } from "./userService.interface";

export interface IUserController {
    userService: IUserService;
    create(req: Request, res: Response, next: NextFunction): Promise<Response | undefined>;
    findAll(req: Request, res: Response, next: NextFunction): Promise<Response | undefined>;
    login(req: Request, res: Response, next: NextFunction): Promise<Response | undefined>;
}
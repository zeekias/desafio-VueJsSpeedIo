import { Request, Response, NextFunction } from "express";
import { IAddressService } from "./addressService.interface";

export interface IAddressController {
    addressService: IAddressService;
    create(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
    findShort(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
    visit(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
    findByUser(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
    findByTop(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
    delete(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
}
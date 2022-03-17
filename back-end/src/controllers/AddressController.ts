import { Request, Response, NextFunction } from "express";
import { IAddressController } from "../interfaces/address/addressController.interface";
import { IAddressService } from "../interfaces/address/addressService.interface";

class AddressController implements IAddressController {
  addressService: IAddressService;

  constructor(addressService: IAddressService) {
    this.addressService = addressService;
    this.create = this.create.bind(this);
    this.findShort = this.findShort.bind(this);
    this.findAll = this.findAll.bind(this);
    this.findByTop = this.findByTop.bind(this);
    this.findByUser = this.findByUser.bind(this);
    this.visit = this.visit.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const address = await this.addressService.create(req.body);
      return res.status(200).json(address);
    } catch (err) {
      next(err);
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const addresses = await this.addressService.findAll();
      return res.status(200).json(addresses);
    } catch (err) {
      next(err);
    }
  }
  async findByUser(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const addresses = await this.addressService.findByUser(req.userId);
      return res.status(200).json(addresses);
    } catch (err) {
      next(err);
    }
  }
  async findByTop(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const addresses = await this.addressService.findByTop();
      return res.status(200).json(addresses);
    } catch (err) {
      next(err);
    }
  }
  async findShort(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const address = await this.addressService.findByShort(req.params['shorted']);
      return res.status(200).json(address);
    } catch (err) {
      next(err);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      await this.addressService.delete(req.params['shorted']);
      return res.status(201).json({});
    } catch (err) {
      next(err);
    }
  }

  async visit(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const address = await this.addressService.findByShort(req.params['shorted'], true);
      return res.status(200).json(address);
    } catch (err) {
      next(err);
    }
  }
}

export default AddressController;
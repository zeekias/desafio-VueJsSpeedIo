import { Model } from 'mongoose';
import generate from 'nanoid';

import { IAddress } from "../interfaces/address/address";
import { IAddressService } from "../interfaces/address/addressService.interface";
import APIError from '../utils/APIError';

class AddressService implements IAddressService {

  addressModel: Model<IAddress>;

  constructor(addressModel: Model<IAddress>) {
    this.addressModel = addressModel;
  }

  async create(userDate: IAddress): Promise<IAddress> {
    try {
      const address = await this.addressModel.create({...userDate, short_url: generate.nanoid(6)});
      return address;
    } catch (e) {
      throw new APIError('Internal server error', 500);
    }
  }

  async findByShort(short_url: string, visit=false) {
    try {
      let address = await this.addressModel.findOne({ short_url });
      if (!address) {
        throw new APIError('URL not found', 404);
      }
      if (visit) {
        address.count += 1;
        await this.addressModel.updateOne({ _id: address._id }, address);
      }
      return address;
    } catch (e: any) {
      if(!e.status) {
        throw e;
      }
      throw new APIError('Internal server error', 500);
    }
  }
  async findByTop() {
    try {
      const address = await this.addressModel.find().sort({ field: 'asc', count: -1 }).limit(100);
      return address;
    } catch (e) {
      throw new APIError('Internal server error', 500);
    }
  }
  async findByUser(userId: string) {
    try {
      const address = await this.addressModel.find({ userId: userId });
      return address;
    } catch (e) {
      throw new APIError('Internal server error', 500);
    }
  }
  async delete(short_url: string) {
    try {
      await this.addressModel.deleteOne({ short_url });
    } catch (e: any) {
      if(!e.status) {
        throw e;
      }
      throw new APIError('Internal server error', 500);
    }
  }
  async findAll() {
    try {
      const address = await this.addressModel.find();
      return address;
    } catch (e) {
      throw new APIError('Internal server error', 500);
    }
  }
}

export default AddressService;
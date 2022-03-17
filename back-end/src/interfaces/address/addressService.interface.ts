import { Model } from 'mongoose';
import { IAddress } from './address';

export interface IAddressService {
    addressModel: Model<IAddress>;
    create(rDate: IAddress): Promise<IAddress>;
    findByShort(url_shorted: string, visit?: boolean): Promise<IAddress>;
    delete(url_shorted: string): Promise<void>;
    findByTop(): Promise<IAddress[]>;
    findAll(): Promise<IAddress[]>;
    findByUser(userId: string): Promise<IAddress[]>;
}
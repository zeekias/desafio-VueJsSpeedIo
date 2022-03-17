import { Model } from 'mongoose';
import { IUser } from "./user.interface";

export interface IUserService {
    userModel: Model<IUser>;
    create(userDate: IUser): Promise<void>;
    findAll(): Promise<IUser[]>;
    findByEmail(email: string): Promise<IUser>;
}
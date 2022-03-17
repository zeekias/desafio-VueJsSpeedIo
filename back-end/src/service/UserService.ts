import bcrypt from "bcrypt";
import { Model } from 'mongoose';
import { IUser } from '../interfaces/users/user.interface';
import { IUserService } from "../interfaces/users/userService.interface";
import APIError from "../utils/APIError";

class UserService implements IUserService {

  userModel: Model<IUser>;

  constructor(userModel: Model<IUser>) {
    this.userModel = userModel;
  }

  async create(userDate: IUser): Promise<void> {
    try {
      const passwordHash = await bcrypt.hash(userDate.password, 10);
      await this.userModel.create({ ...userDate, password: passwordHash });
    } catch (e) {
      throw new APIError('Internal server error', 500);
    }
  }

  async findAll()  {
    try {
      const users = await this.userModel.find();
      return users;
    } catch (e) {
      throw new APIError('Internal server error', 500);
    }
  }

  async findByEmail(email: string) {
    try {
      const user = await this.userModel.findOne({ email });
      if (!user) {
        throw new APIError('User não encontrado', 404);
      }
      return user;
    } catch (e: any) {
      if(!e.status) {
        throw e;
      }
      throw new APIError('Internal server error', 500);
    }
  }
}

export default UserService;
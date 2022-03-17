import { Request, Response, NextFunction } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { IUserController } from "../interfaces/users/userController.interface";
import { IUserService } from "../interfaces/users/userService.interface";

class UserController implements IUserController {
    userService: IUserService;

    constructor(userService: IUserService) {
        this.userService = userService;
        this.create = this.create.bind(this);
        this.findAll = this.findAll.bind(this);
        this.login = this.login.bind(this);
    }

    async create(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
        try {
            await this.userService.create(req.body);
            return res.status(201).json({});
        } catch (err) {
            next(err);
        }
    }

    async findAll(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
        try {
            const users = await this.userService.findAll();
            return res.status(200).json(users);
        } catch (err) {
            next(err);
        }
    }

    async login(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
      try {
          const { email, password } = req.body;
          const user = await this.userService.findByEmail(email);
          if (await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({
              id: user._id,
              email: user.email,
            }, 'secret', { expiresIn: '1h'});
            return res.status(200).json({ token, username: user.username, id: user._id });
          }
          return res.status(400).json({ "error": "invalid password" });
      } catch (err) {
          next(err);
      }
  }
}

export default UserController;
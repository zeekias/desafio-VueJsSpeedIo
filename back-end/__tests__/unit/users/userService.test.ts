import { Model } from 'mongoose';
import { IUser } from '../../../src/interfaces/users/user.interface';
import UserService from '../../../src/service/UserService';
import bcrypt from "bcrypt";

describe('Test userService', () => {

  const userModelMock = {
    create: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
  };

  const userMock = {
		"_id": "622949dcdaf6539f374ce94e",
		"username": "antonio",
		"email": "antonio@gmail.com",
		"password": "123",
		"__v": 0
	}

  const userServiceMock = new UserService(userModelMock as any as Model<IUser>);

  jest.spyOn(bcrypt, 'hash')
    .mockImplementation(() => '1234')

  test('should create an user', async () => {
    await userServiceMock.create({ username: 'user', email: 'user@example.com', password: '6543' } as IUser);
    expect(userModelMock.create).toBeCalledWith({ username: 'user', email: 'user@example.com', password: '1234' })
  });

  test('should find all users', async () => {
    const userArray = Array(50).fill(userMock) as any;

    jest.spyOn(userModelMock, 'find')
      .mockImplementation(() => userArray)
    const users = await userServiceMock.findAll();
    expect(users).toStrictEqual(userArray);
  });

  test('should find user by email', async () => {

    jest.spyOn(userModelMock, 'findOne')
      .mockImplementation(() => userMock)

    const user = await userServiceMock.findByEmail('email');
    expect(user).toStrictEqual(userMock);
  });
});

import http from 'http';
import bcrypt from 'bcrypt';
import axios from 'axios';
import jwt from 'jsonwebtoken';

import App from '../app';
import AddressController from '../src/controllers/AddressController';
import UserController from '../src/controllers/UserController';
import { IAddressService } from '../src/interfaces/address/addressService.interface';
import { IUserService } from '../src/interfaces/users/userService.interface';
import { IUser } from '../src/interfaces/users/user.interface';

describe("Rest API - user's routers", () => {
  let restAPI: http.Server;
  const BASE_URL = 'http://localhost:3072/';
  
  const userServiceMock = {
    create: jest.fn(),
    findAll: jest.fn(),
    findByEmail: jest.fn(),
  } as any as IUserService;

  const addressServiceMock = {
  } as any as IAddressService;

  

  
  beforeEach((done) => {
    const userController = new UserController(userServiceMock);
    const addressController = new AddressController(addressServiceMock);
    restAPI = new App({ userController, addressController }).app.listen(3072, () => {
      done()
    });
  });

  afterEach((done) => {
    restAPI.close(() => {
      done()
    })
  });

  afterAll((done) => {
    restAPI.close(() => {
      done()
    })
  });

  const userMock = {
		"_id": "622949dcdaf6539f374ce94e",
		"username": "user",
		"email": "user@gmail.com",
		"password": "123",
		"__v": 0
	} as any 

  it('should find all users', async () => {
    jest.spyOn(userServiceMock, 'findAll')
      .mockReturnValue([userMock] as any as Promise<IUser[]>)

    const response = await axios(
      BASE_URL + 'users',
      {
        headers: {
          authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmE5MWU4ZDU3ZTdhYmI3MjI5Y2EwNiIsImVtYWlsIjoiYW50b25pbzQyMEBnbWFpbC5jb20iLCJpYXQiOjE2NDczNTU3MzR9.y3XwB_xk7bm1XBX_h7-oueG1Bc6RKFHATbJgAd9_aYg'
        }
      }  
    );
    const data = response.data;
    expect(data).toStrictEqual([userMock]);
  });

  it('should create an user', async () => {
    const reqBody = {
      "username": "user",
      "email": "example420@gmail.com",
      "password": "12345678"
    }

    const response = await axios.post(BASE_URL + 'users', reqBody);
    expect(response.status).toBe(201);
    expect(userServiceMock.create).toBeCalledWith(reqBody);
  });

  it('should made login', async () => {
    const reqBody = {
      "email": "example420@gmail.com",
      "password": "12345678"
    }
    jest.spyOn(userServiceMock, 'findByEmail')
      .mockReturnValue(userMock)
    
    jest.spyOn(bcrypt, 'compare')
      .mockImplementation(() => true);
    jest.spyOn(jwt, 'sign')
      .mockImplementation(() => 'token');

    const response = await axios.post(BASE_URL + 'users/login', reqBody);
    const data = response.data;
    expect(response.status).toBe(200);
    expect(data).toStrictEqual({ token: 'token', username: 'user', id: '622949dcdaf6539f374ce94e'});
  });
})
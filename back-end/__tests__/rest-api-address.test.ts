import http from 'http';
import axios from 'axios';

import App from '../app';

import AddressController from '../src/controllers/AddressController';
import UserController from '../src/controllers/UserController';

import { IAddressService } from '../src/interfaces/address/addressService.interface';
import { IUserService } from '../src/interfaces/users/userService.interface';
import { IAddress } from '../src/interfaces/address/address';

describe("Rest API - address's routers", () => {
  let restAPI: http.Server;
  const BASE_URL = 'http://localhost:3072/';
  
  const userServiceMock = {} as any as IUserService;

  const addressServiceMock = {
    create: jest.fn(),
    findAll: jest.fn(),
    findByTop: jest.fn(),
    findByUser: jest.fn(),
    findByShort: jest.fn(),
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

  const addressMock = {
    "_id": "622feb286c1ec88e80a1f75e",
    "short_url": "cA-GNW",
    "url": "https://google.com",
    "count": 2,
    "userId": "622a91e8d57e7abb7229ca06",
    "__v": 0
  } as any 

  it('should return an address by short url', async () => {
    jest.spyOn(addressServiceMock, 'findByShort')
      .mockReturnValue(addressMock)

    const response = await axios(BASE_URL + 'address/cA-GNW');
    const data = response.data;
    expect(data).toStrictEqual(addressMock)
  });

  it('should create an address', async () => {
    const reqBody = {
      url: 'https://google.com',
      userId: 'userId',
    }
    jest.spyOn(addressServiceMock, 'create')
      .mockReturnValue(addressMock)
    const response = await axios.post(BASE_URL + 'address', reqBody);

    expect(response.status).toBe(200);
    expect(addressServiceMock.create).toBeCalledWith(reqBody)
  });

  it('should return top 100 urls more visited', async () => {
    const topAddress = Array(100).fill(addressMock) as any as Promise<IAddress[]>
    jest.spyOn(addressServiceMock, 'findByTop')
      .mockReturnValue(topAddress)

    const response = await axios(BASE_URL + 'address/top');
    const data = response.data;
    expect(response.status).toBe(200);
    expect(data).toStrictEqual(topAddress);
  });

  it("should return user's address", async () => {
    const userAddress = Array(3).fill(addressMock) as any as Promise<IAddress[]>
    jest.spyOn(addressServiceMock, 'findByUser')
      .mockReturnValue(userAddress)

    const response = await axios(
      BASE_URL + 'address',
      {
        headers: {
          authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmE5MWU4ZDU3ZTdhYmI3MjI5Y2EwNiIsImVtYWlsIjoiYW50b25pbzQyMEBnbWFpbC5jb20iLCJpYXQiOjE2NDczNTU3MzR9.y3XwB_xk7bm1XBX_h7-oueG1Bc6RKFHATbJgAd9_aYg'
        }
      }
    );
    const data = response.data;
    expect(response.status).toBe(200);
    expect(data).toStrictEqual(userAddress);
  });
  
})
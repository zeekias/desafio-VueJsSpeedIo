import { Model } from 'mongoose';
import generate from 'nanoid';

import { IAddress } from "../../../src/interfaces/address/address";
import AddressService from "../../../src/service/AddressService";

describe('Test addressService', () => {
  const addressModelMock = {
    create: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    updateOne: jest.fn(),
  } as any as Model<IAddress>;

  const addressMock = {
		"_id": "622feaf34803cdc3671bef82",
		"short_url": "FClYHx",
		"url": "https://youtube.com",
		"count": 0,
		"userId": "622a91e8d57e7abb7229ca06",
		"__v": 0
	};

  const addressService = new AddressService(addressModelMock);
  test('should create a short_url', async () => {
    jest.spyOn(generate, 'nanoid')
      .mockImplementation(() => 'nanoId')
    await addressService.create({ url: "https://example.com", userId: "1234" } as IAddress);
    expect(addressModelMock.create).toBeCalledWith({ url: "https://example.com", userId: "1234", short_url: 'nanoId' });
  });

  test('should find all addresses', async () => {
    const addressArray = Array(50).fill(addressMock) as any;

    jest.spyOn(addressModelMock, 'find')
      .mockImplementation(() => addressArray)

    const addresses = await addressService.findAll();
    expect(addresses).toStrictEqual(addressArray);
  });
  
  test('should return top 100 url more visited', async () => {
    const addressArrayTop = Array(100).fill(addressMock) as any;

    jest.spyOn(addressModelMock, 'find')
      .mockImplementation(() => {
        return {
          sort: jest.fn().mockImplementation(() => {
            return {limit: jest.fn().mockImplementation(() => addressArrayTop)}
          })
        } as any
      })

    const addresses = await addressService.findByTop();
    expect(addresses).toStrictEqual(addressArrayTop);
  });

  test('should find a address by user', async () => {
    jest.spyOn(addressModelMock, 'find')
      .mockImplementation(() => addressMock as any)

    const address = await addressService.findByUser('userid');
    expect(address).toStrictEqual(addressMock);
  });

  test('should find a address by short', async () => {
    jest.spyOn(addressModelMock, 'findOne')
      .mockImplementation(() => addressMock as any)
    
    const address = await addressService.findByShort('userid');
    let addressToReturn = { ...addressMock };
    expect(address).toStrictEqual(addressToReturn);
  });
});
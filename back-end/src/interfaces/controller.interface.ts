import { IAddressController } from "./address/addressController.interface";
import { IUserController } from "./users/userController.interface";

export type TController = {
  addressController: IAddressController;
  userController :IUserController;
};
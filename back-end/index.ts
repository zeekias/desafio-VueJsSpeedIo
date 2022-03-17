import App from './app';
import AddressController from './src/controllers/AddressController';
import UserController from './src/controllers/UserController';
import addressModel from './src/models/Address';
import userModel from './src/models/User';
import AddressService from './src/service/AddressService';
import UserService from './src/service/UserService';

const addressService = new AddressService(addressModel);
const userService = new UserService(userModel);

const addressController = new AddressController(addressService);
const userController = new UserController(userService)

const server = new App({ addressController, userController });

server.app.listen(3072, () => console.log('listening on port 3072'));
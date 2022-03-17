import { Router, Application } from 'express';
import { TController } from '../interfaces/controller.interface';
import authorizer from '../middlewares/authorizer';


function addressRouters(app: Application, controller: TController) {
  const router = Router();

  router.post('/address', controller.addressController.create);
  router.get('/address/top', controller.addressController.findByTop);
  router.get('/address/:shorted', controller.addressController.findShort);
  router.delete('/address/:shorted', controller.addressController.delete);

  router.get('/address/:shorted/visit', controller.addressController.visit);
  router.get('/address', authorizer, controller.addressController.findByUser);
  app.use(router);
}

export default addressRouters;
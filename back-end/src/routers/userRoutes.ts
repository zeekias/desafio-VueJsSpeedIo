import { Router, Application } from 'express';
import { TController } from '../interfaces/controller.interface';
import authorizer from '../middlewares/authorizer';

function useRouters(app: Application, controller: TController) {
  const router = Router();
  
  router.post('/users', controller.userController.create);
  router.post('/users/login', controller.userController.login);
  router.get('/users', authorizer, controller.userController.findAll);
  app.use(router);
}

export default useRouters;
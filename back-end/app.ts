import express from 'express';
import cors from 'cors';
import './src/database';

import userRouters from './src/routers/userRoutes';
import addressRouters from './src/routers/addressRouter';

import { verifyErrors } from './src/middlewares/verifyErrors';
import { TController } from './src/interfaces/controller.interface';

class App {
    app: express.Application;
    
    constrollers: TController;

    constructor(constrollers: TController) {
        this.app = express();
        this.constrollers = constrollers;
        this.configs();
        this.middlewares();
        this.routers();
        this.errorHandler();
    }
    configs() {
        this.app.use(express.json());
    }
    middlewares() {
      this.app.use(cors());
    }
    errorHandler() {
      this.app.use(verifyErrors);
    }
    routers() {
        userRouters(this.app, this.constrollers);
        addressRouters(this.app, this.constrollers);
    }
}

export default App;
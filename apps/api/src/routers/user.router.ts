import { SampleController } from '@/controllers/sample.controller';
import { UserController } from '@/controllers/user.controller';
import { Router } from 'express';

export class UserRouter {
  private router: Router;
  private userController: UserController;

  constructor() {
    this.userController = new UserController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.userController.getUserData);
    this.router.post('/register', this.userController.registerUser);
    this.router.post('/login', this.userController.loginUser);

    // this.router.get('/:id', this.sampleController.getSampleDataById);
    // this.router.post('/', this.sampleController.createSampleData);
  }

  getRouter(): Router {
    return this.router;
  }
}

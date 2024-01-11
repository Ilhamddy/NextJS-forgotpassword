import { UserController } from '@/controllers/user.controller';
import { Router } from 'express';
import { verifyToken } from 'middleware/jwtVerifyToken';

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
    this.router.get('/keep', verifyToken, this.userController.keepLogin);

    // this.router.get('/:id', this.sampleController.getSampleDataById);
    // this.router.post('/', this.sampleController.createSampleData);
  }

  getRouter(): Router {
    return this.router;
  }
}

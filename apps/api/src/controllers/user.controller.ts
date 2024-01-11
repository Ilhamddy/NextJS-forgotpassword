import { keepLoginAction } from '@/actions/keeplogin.action';
import { loginUserAction } from '@/actions/login.actions';

import { registerAction } from '@/actions/register.actions';
import prisma from '@/prisma';
import { NextFunction, Request, Response } from 'express';

export class UserController {
  async getUserData(req: Request, res: Response, next: NextFunction) {
    try {
      //   const data = req.body;
      const result = await prisma.user.findMany();
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const result = await registerAction(data);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async loginUser(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;

      const result = await loginUserAction(data);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async keepLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const email = req.user!.email;
      const result = await keepLoginAction(email as string);

      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}

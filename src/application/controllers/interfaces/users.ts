import { IUserController } from '../../../interfaces/controllers';
import { Request, Response } from 'express';
import { UserControllerImplementation } from '../implementations';

export class UserController implements IUserController {
    constructor(private userController: UserControllerImplementation) { }

    async getUser(req: Request, res: Response): Promise<void> {
        return this.userController.getUser(req, res);
    }
}
import { Router, Request, Response } from 'express';
import { UserController } from '../controllers/interfaces';
import { UserControllerImplementation } from '../controllers/implementations';
import { UserService } from '../../domains/services';
import { UserRepository } from '../../infrastructure/database/repositories';


export const userRoutes = Router();
const userController = new UserController(new UserControllerImplementation(new UserService(new UserRepository())));

userRoutes.get('/:id', async (req: Request, res: Response) => {
    await userController.getUser(req, res);
});

userRoutes.get('/', async (req: Request, res: Response) => {
    console.log('Users List');
    res.status(200).send('Users list');
});

export default userRoutes;

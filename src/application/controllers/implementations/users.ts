import { IUserService } from '../../../interfaces/services';
import { Request, Response } from 'express';

export class UserControllerImplementation {
    constructor(private userService: IUserService) { }

    async getUser(req: Request, res: Response): Promise<void> {
        const userId = req.params.id;
        const user = await this.userService.getUser(userId);
        if (!user) {
            res.status(404).send('User Not Found');
        } else {
            res.status(200).send(user);
        }
    }

    async addUser(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body;
            const user = await this.userService.addUser(name, email, password);
            res.status(201).json({ user });
        } catch (error) {
            res.status(400).json({ error: error });
        }
    }
}
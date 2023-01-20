import { IUser } from '../models';

export interface IUserService {
    getUser(userId: string): Promise<IUser | undefined>;
    addUser(name: string, email: string, password: string): Promise<IUser | undefined>;
}
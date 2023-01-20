import { IUser } from '../models';

export interface IUserRepository {
    getUser(userId: string): Promise<IUser | undefined>;
}
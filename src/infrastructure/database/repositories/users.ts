import { Document, model, Model, Schema } from 'mongoose';
import { IUser } from '../../../interfaces/models';
import { IUserRepository } from '../../../interfaces/repositories';
import { UserModel } from '../models';

export class UserRepository implements IUserRepository {
    async getUser(userId: string): Promise<IUser | undefined> {
        const user = await UserModel.findById(userId);
        return user ? user.toObject() : undefined;
    }
}

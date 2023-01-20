import { IUserRepository } from '../../interfaces/repositories';
import { IUser } from '../../interfaces/models';

export class UserService {
    constructor(private userRepository: IUserRepository) { }

    async getUser(userId: string): Promise<IUser | undefined> {
        return await this.userRepository.getUser(userId);
    }
}

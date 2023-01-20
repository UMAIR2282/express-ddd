import mongoose from 'mongoose';
import { IUser } from '../../../interfaces/models';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

export const UserModel = mongoose.model<IUser & mongoose.Document>('User', userSchema);
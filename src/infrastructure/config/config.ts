import dotenv from 'dotenv';

dotenv.config();

export class Config {
    public static get mongoUrl(): string {
        return process.env.MONGO_URL ?? '';
    }
}
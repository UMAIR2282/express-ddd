import mongoose from 'mongoose';
import { Config } from './config';

export const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
};

export const connectToDatabase = () => {
    mongoose.connect(Config.mongoUrl);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('Connected to the database.');
    });
};
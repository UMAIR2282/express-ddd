import express from 'express';
import { userRoutes } from './application/routes';
import { connectToDatabase } from './infrastructure/config/database';

const app = express();

app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
    connectToDatabase();
});
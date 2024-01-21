import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import dotenv from 'dotenv';

import chatsRouter from './routes/chats.js';
import authRouter from './routes/users.js';
dotenv.config();
const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
app.use(cors());
app.use(logger(formatsLogger));
app.use(express.json());

app.use('/api/chats', chatsRouter);
app.use('/api/users', authRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found!!!!!!!' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Error Server' } = err;
  res.status(status).json({ message });
});

export default app;

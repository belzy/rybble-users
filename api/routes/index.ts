import express from 'express';
import usersRouter from './users.routes';

const apiRouter = express.Router();

apiRouter.use('/api', usersRouter);

export default apiRouter;
import express, { Request, Response, NextFunction } from 'express';

const usersRouter = express.Router();

usersRouter.get('/users', (request: Request, response: Response, next: NextFunction) => {

  response.send('testing from users service');

});

export default usersRouter;
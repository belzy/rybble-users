import express, { Request, Response, NextFunction } from 'express';
import { 
  readUsers,
  findUserByEmail,
  createUser,
} from '../../data/helpers';

const usersRouter = express.Router();

usersRouter.get('/', (request: Request, response: Response, next: NextFunction) => {

  const email: any = request.query.email;

  readUsers();
  findUserByEmail(email)
    .then(user => {

      console.log(user);
      response.json(user);
    }).catch(console.error);

});

usersRouter.post('/create', (request: Request, response: Response, next: NextFunction) => {

  const name: any = request.body.name;
  const email: any = request.body.email;

  try {

    findUserByEmail(email)
      .then(user => {

        if (user !== null)
          response.status(409).json({ Error: "A user with that email already exists" });
        else {

          createUser({ name, email })
            .then(result => {

              const user_id: number  = result.id;

              response.status(201).json({ user_id });
            });

        }
        
      });

  } catch (error) {

    console.error(error);
    next(error);

  }

});

export default usersRouter;
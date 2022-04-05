import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import apiRouter from './api/routes';

const server = express();
const PORT = process.env.PORT || 8082;

const middleware = [
  morgan('combined'),
  bodyParser.json(),
  apiRouter,
];

server.use(middleware);

server.listen(PORT, () => {
  console.log(`[server] Server listening on port ${ PORT }...`);
});
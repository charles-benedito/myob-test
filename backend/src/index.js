import { connectDb } from './config/database';
import express from 'express';
import chalk from 'chalk';
import middlewares from './config/middlewares';
import routes from './config/routes';

connectDb();

const app = express();

middlewares(app);
routes(app);

if (!module.parent) {
  app.listen(process.env.PORT, err => {
    if (err) {
      console.error(chalk.red('Error! ', err));
    } else {
      console.log(chalk.green.bold(`
        YEAHHHH! nothing broke so far.
        Listening port ${process.env.PORT} - with env ${process.env.NODE_ENV}`
      ));
    }
  });
}

export default app;

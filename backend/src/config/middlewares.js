import bodyParser from 'body-parser';
import compression from 'compression';
import passport from 'passport';
import methodOverride from 'method-override';
import helmet from 'helmet';
import cors from 'cors';

export default app => {
  app.use(compression());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(passport.initialize());
  app.use(helmet());
  app.use(cors());
  app.use(methodOverride());
};

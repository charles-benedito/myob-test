import { Router } from 'express';
import * as controller from '../controllers/payment.controller';

const routes = new Router();

routes.get('/', controller.read);
routes.post('/',controller.createOne);
routes.delete('/:id', controller.deleteOne);

export default routes;

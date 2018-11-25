import { Router } from 'express';
import * as controller from '../controllers/employee.controller';

const routes = new Router();

routes.get('/', controller.read);
routes.get('/:id', controller.readOne);
routes.post('/',controller.createOne);
routes.patch('/:id',controller.updateOne);
routes.delete('/:id', controller.deleteOne);

export default routes;

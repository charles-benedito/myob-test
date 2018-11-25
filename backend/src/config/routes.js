import employeeRoutes from '../routes/employee.routes';
import paymentRoutes from '../routes/payment.routes';
import APIError from '../services/error';
import logError from '../services/log';
import HTTPStatus from 'http-status';

export default app => {
  app.use('/api/employee', employeeRoutes);
  app.use('/api/payment', paymentRoutes);
  
  app.use('*', (req, res, next) =>
    next(new APIError('Not Found!', HTTPStatus.NOT_FOUND, true)),
  );
  app.use(logError);
};

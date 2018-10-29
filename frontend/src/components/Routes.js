import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';

import EmployeeRead from './EmployeeRead';
import EmployeeUpdate from './EmployeeUpdate';
import EmployeeCreate from './EmployeeCreate';

import PaymentRead from './PaymentRead';
import PaymentCreate from './PaymentCreate';

const Main = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path='/' component={Dashboard} />
        
        <Route exact path='/employee' component={EmployeeRead} />
        <Route exact path='/employee/create' component={EmployeeCreate} />
        <Route exact path='/employee/:id' component={EmployeeUpdate} />

        <Route exact path='/payment' component={PaymentRead} />
        <Route exact path='/payment/create' component={PaymentCreate} />

      </Switch>
    </div>
  )
}

export default Main;

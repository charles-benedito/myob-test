import React from 'react';
import Breadcrumbs from './Breadcrumbs';

const routes = {
    '/': 'Dashboard'
};

const Dashboard = props => (
    <div>
        <Breadcrumbs routes={routes}  />
        <h1>Dashboard</h1>
        <p>This is your dashboard page, unfortunately there is nothing here yet...<br />
            But when you hire me i will create a lot of cool things =}<br />
            In the meantime go to the Employees on menu.
        </p>
    </div>
)

export default Dashboard;
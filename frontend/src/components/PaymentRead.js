import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

const Row = props => (
  <tr key={props.item._id}>
    <td><Link to={`/payment/${props.item._id}`}>{props.item.employee.firstName} {props.item.employee.lastName}</Link></td>
    <td>{props.item.payPeriod}</td>  
    <td>{props.item.grossIncome}</td>
    <td>{props.item.incomeTax}</td>
    <td>{props.item.netIncome}</td>  
    <td>{props.item.super}</td>
  </tr>
);

const Table = props => (
  <table className="striped highlight responsive-table">
    <thead>
      <tr>
        <th>Employee</th>
        <th>Pay Period</th>
        <th>Gross Income</th>
        <th>Income Tax</th>
        <th>Net Income</th>
        <th>Super</th>
      </tr>
    </thead>
    <tbody>
      {props.data.map(item => item.employee && <Row key={item._id} item={item} />)}
    </tbody>
  </table>
);

export default class PaymentRead extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    this.read();
  }

  read() {
    fetch(`${process.env.REACT_APP_API}/payment`)
      .then(response => response.json())
      .then(response => this.setState({ data: response }));
  }

  render() {
    const routes = {
      '/': 'Dashboard',
      '/payment': 'Payment',
    };

    return (
      <div>
        <Breadcrumbs routes={routes}  />

        <Link to="/payment/create" className="btn green right">Enter Pay</Link>
        
        <h1>Payments</h1>

        <p>Here's where you manage payments. Click on the employee's name to print the pay slip.</p>
        
        <ul className="collection">
          <Table data={this.state.data} />
        </ul>
      </div>
    )
  }
}

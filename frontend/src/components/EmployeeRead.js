import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

const Row = props => (
  <tr key={props.item._id}>
    <td><Link to={`/employee/${props.item._id}`}>{props.item.firstName} {props.item.lastName}</Link></td>
    <td>${props.item.annualSalary}</td>
    <td>{props.item.superRate}%</td>  
  </tr>
);

const Table = props => (
  <table className="striped highlight responsive-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Annual Salary</th>
        <th>Super Rate</th>
      </tr>
    </thead>
    <tbody>
      {props.data.map(item => <Row key={item._id} item={item} />)}
    </tbody>
  </table>
);

export default class EmployeeRead extends React.Component {
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
    fetch(`${process.env.REACT_APP_API}/employee`)
      .then(response => response.json())
      .then(response => this.setState({ data: response }));
  }

  render() {
    const routes = {
      '/': 'Dashboard',
      '/employee': 'Employee',
    };

    return (
      <div>
        <Breadcrumbs routes={routes}  />

        <Link to="/employee/create" className="btn green right">Add Employee</Link>
        
        <h1>Employees</h1>
        
        <p>Here's where you manage employees. Before adding a new employee, give them a Tax file number declaration to fill in and return to you (see a sample). You'll need it when you're entering their details. Order this on the ATO website.</p>
        
        <ul className="collection">
          <Table data={this.state.data} />
        </ul>
      </div>
    )
  }
}

import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

export default class EmployeeCreate extends React.Component {
    create(data) {
        fetch(`${process.env.REACT_APP_API}/employee`, {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(data),
        })
        .then(() => this.props.history.push('/employee'));
    }

    handleSubmit(event) {
        const data = {
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            paymentStartDate: event.target.paymentStartDate.value,
            annualSalary: event.target.annualSalary.value,
            superRate: event.target.superRate.value
        }
        this.create(data);
        event.preventDefault();
    }

    render() {
        const routes = {
            '/': 'Dashboard',
            '/employee': 'Employee',
            '/employee/create': 'Add Employee'
        };
        
        return (
            <div>
                <Breadcrumbs routes={routes}  />

                <h1>New Employee</h1>

                <p>Here's where you enter employee information, including personal details, pay details and tax information. There are required * fields.</p>

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text" name="firstName" required="true" />
                            <label>*First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input  type="text" name="lastName" />
                            <label>Second Name</label>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="input-field col s4">
                            <input type="text" name="annualSalary" required="true" step=".01" min="0" />
                            <label>*Annual Salary (99999.99)</label>
                        </div>
                        <div className="input-field col s4">
                            <input  type="number" name="superRate" min="0" max="50" />
                            <label>Super Rate (0~50)</label>
                        </div>
                        <div className="input-field col s4">
                            <input  type="date" name="paymentStartDate" required="true" />
                            <label>*Payment Start Date (dd/mm/yyyy)</label>
                        </div>                        
                    </div>

                    <div className="input-field">
                        <input type="submit" value="Save" className="btn" />
                        <Link className="btn grey" to="/employee" style={{marginLeft: 10}}>Cancel</Link>
                    </div>
                </form>
            </div>
        )
    }
}

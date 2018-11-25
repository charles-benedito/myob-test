import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

export default class PaymentCreate extends React.Component {
    constructor() {
        super();
        this.state = {
            employees: []
        }
    }

    componentWillMount() {
        this.employeeRead();
    }

    employeeRead() {
        fetch(`${process.env.REACT_APP_API}/employee`)
            .then(response => response.json())
            .then(response => this.setState({ employees: response }));
    }

    handleSubmit(event) {
        const data = {
            employee: event.target.employee.value,
            payMonth: event.target.payMonth.value,
            payYear: event.target.payYear.value
        }
        this.create(data);
        event.preventDefault();
    }

    create(data) {
        fetch(`${process.env.REACT_APP_API}/payment`, {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(data),
        })
        .then(() => this.props.history.push('/payment'));
    }

    render() {
        const routes = {
            '/': 'Dashboard',
            '/payment': 'Payment',
            '/payment/create': 'Enter Pay'
        };

        const employeeOptions = this.state.employees.map((employee,index)=>{
            return(
                <option key={employee._id} value={employee._id}>{employee.firstName} {employee.lastName}</option>
            )
        });

        return (
            <div>
                <Breadcrumbs routes={routes} />

                <h1>Pay Centre</h1>

                <p>Here's where you pay your <Link to="/employee">employees</Link>. You'll need to set up each employee first.</p>

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="row">
                        <div className="input-field col s12">
                            <select name="employee" required="true" className="browser-default">
                                <option value="">*Employee</option>
                                {employeeOptions}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <select name="payMonth" required="true" className="browser-default">
                                <option value="">*For Month</option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                        </div>
                        <div className="input-field col s6">
                            <select name="payYear" required="true" className="browser-default">
                                <option value="">*For Year</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                            </select>
                        </div>
                    </div>

                    <div className="input-field">
                        <input type="submit" value="Save" className="btn" />
                        <Link className="btn grey" to="/payment" style={{ marginLeft: 10 }}>Cancel</Link>
                    </div>
                </form>
            </div>
        )
    }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

export default class EmployeeUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    readOne() {
        fetch(`${process.env.REACT_APP_API}/employee/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(response => { console.log(response); this.setState({ data: response } )});
    }

    componentDidMount() {
        this.readOne();
    }

    updateOne(data) {
        fetch(`${process.env.REACT_APP_API}/employee/${this.props.match.params.id}`, {
            headers: { 'Content-Type': 'application/json' },
            method: 'PATCH',
            body: JSON.stringify(data),
        })
        .then(() => this.props.history.push('/employee'));
    }

    handleSubmit(event) {
        const data = {
            id: this.props.match.params.id,
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            paymentStartDate: event.target.paymentStartDate.value,
            annualSalary: event.target.annualSalary.value,
            superRate: event.target.superRate.value
        }
        this.updateOne(data);
        event.preventDefault();
    }

    deleteOne() {
        fetch(`${process.env.REACT_APP_API}/employee/${this.props.match.params.id}`, {
            method: 'delete',
        })
        .then(() => this.props.history.push('/employee'));
    }

    render() {
        const routes = {
            '/': 'Dashboard',
            '/employee': 'Employee',
            '/employee/:id': 'Edit Employee'
        };

        return (
            <div>
                <Breadcrumbs routes={routes} />

                <button className="btn red right" onClick={this.deleteOne.bind(this)}>Delete</button>

                <h1>{this.state.data.firstName} {this.state.data.lastName}</h1>

                <p>Here's where you enter employee information, including personal details, pay details and tax information. There are required * fields.</p>

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text" name="firstName" defaultValue={this.state.data.firstName} required="true" />
                            <label className="active">*First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input type="text" name="lastName" defaultValue={this.state.data.lastName} />
                            <label className="active">Second Name</label>
                        </div>
                    </div>

                    <div className="row"> 
                        <div className="input-field col s4">
                            <input type="text" name="annualSalary" defaultValue={this.state.data.annualSalary} required="true" step=".01" min="0" />
                            <label className="active">*Annual Salary (99999.99)</label>
                        </div>
                        <div className="input-field col s4">
                            <input type="number" name="superRate" min="0" max="50" defaultValue={this.state.data.superRate} />
                            <label className="active">Super Rate (0~50)</label>
                        </div>
                        <div className="input-field col s4">
                            <input type="date" name="paymentStartDate" defaultValue={this.state.data.paymentStartDate} required="true" />
                            <label className="active">*Payment Start Date (dd/mm/yyyy)</label>
                        </div>
                    </div>

                    <div className="input-field">
                        <input type="submit" value="Save" className="btn" />
                        <Link className="btn grey" to="/employee" style={{ marginLeft: 10 }}>Cancel</Link>
                    </div>
                </form>
            </div>
        )
    }
}

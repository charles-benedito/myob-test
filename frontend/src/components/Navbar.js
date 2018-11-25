import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../static/logo.png';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper white darken-3">
            <div className="container">
              <a href="" data-target="mobile-demo" className="sidenav-trigger" style={{color: '#2e3e4f'}}><i className="fa fa-bars"></i></a>
              <Link to="/" className="brand-logo" style={{marginTop: 7}}>
                <img src={logo} alt="Logo" />
              </Link>
              <ul className="hide-on-small-only" style={{marginLeft: 150}}>
                <li><Link to="/" style={{ color: '#2e3e4f' }}>Dashboard</Link></li>
                <li><Link to="/employee" style={{ color: '#2e3e4f' }}>Employees</Link></li>
                <li><Link to="/payment" style={{ color: '#2e3e4f' }}>Payments</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/employee" >Employees</Link></li>
          <li><Link to="/payment" >Payments</Link></li>
        </ul>
      </div>
    )
  }
}

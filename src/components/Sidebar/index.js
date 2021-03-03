import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { DashboardOutlined, UserOutlined } from '@ant-design/icons';

class Sidebar extends Component {

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName) {
    let location = this.props.location.location || this.props.location;
    return location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }
  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }

  render() {
    return (

      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item" className={this.activeRoute("/dashboard")}>
              <NavLink to={'/'} className="nav-link" activeClassName="active"><DashboardOutlined /> Dashboard</NavLink>
            </li>
            <li className="nav-item" className={this.activeRoute("/profile")}>
              <NavLink to={'/profile'} className="nav-link" activeClassName="active"><UserOutlined /> Profile</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;

import React, { Component } from 'react';
import { Menu as MenuIcon } from 'react-feather';
import { NavLink, withRouter } from "react-router-dom";
import { openDialog } from 'redux-reactstrap-modal';
import LoadingBar from 'react-redux-loading-bar';
import { Collapse, NavbarToggler } from 'reactstrap';


class Menu extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-light fixed-top">
                <a className="navbar-brand" href="#">React Redux Boilerplate</a>
                <NavbarToggler onClick={this.toggle} >
                    <MenuIcon size={16} />
                </NavbarToggler>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/">
                                <div>Home</div>
                            </NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/page">
                                <div>SubPage</div>
                            </NavLink >
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <div>Login</div>
                            </a>
                        </li>
                    </ul>
                </Collapse>
            </nav>
        );
    }
}

export default Menu;

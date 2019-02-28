import React, {Component} from 'react';
import '../App.css';
import {Nav, NavItem, NavLink} from "reactstrap";
import Cookies from "universal-cookie";


class SideBar extends Component {

    componentDidMount() {
        let cookies = new Cookies();
        if (!cookies.get('token')) {
            window.location = "http://localhost:3000/";
        }
    }

    render() {
        return (
            <Nav vertical>
                <NavItem>
                    <NavLink href="#">All</NavLink>
                    <hr/>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Read</NavLink>
                    <hr/>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Currently Reading</NavLink>
                    <hr/>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Want to Read</NavLink>
                </NavItem>
            </Nav>

        );
    }
}

export default SideBar;
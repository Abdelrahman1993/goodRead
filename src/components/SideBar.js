import React , {Component} from 'react';
import '../App.css';
import {Nav, NavItem, NavLink} from "reactstrap";


class SideBar extends Component {

    render() {
        return (

            <div className='container-fluid sidbar'>

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
                        <NavLink  href="#">Want to Read</NavLink>
                    </NavItem>
                </Nav>
            </div>

        );
    }
}
export default SideBar;
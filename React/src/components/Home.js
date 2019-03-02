import React , {Component} from 'react';
import '../App.css';
import Nav from "./Nav";
import LeftSideData from "./LeftSideData";
import SideBar from "./SideBar";

class Home extends Component {


    render() {
        return(
             <Nav/>,
             <SideBar/>
        )
    };
}

export default Home;
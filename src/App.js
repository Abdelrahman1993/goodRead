import React from 'react';
import './App.css';
import AdminLogin from "./components/AdminLogin"
import {BrowserRouter,Route ,Link} from "react-router-dom";
import AdminControl from "./components/AdminControl";

// import Nav from "./components/Nav";
import UsrLogin from "./components/UsrLogin";
import LeftSideData from "./components/LeftSideData";
import UsrSignUp from "./components/UsrSignUp";




class App extends React.Component {


    render() {

    return (
        <BrowserRouter>


            <Route path="/" exact component={UsrSignUp}/>


        </BrowserRouter>
    );
  }
}
export default App;

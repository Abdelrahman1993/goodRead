import React from 'react';
import './App.css';
import {BrowserRouter,Route ,Link} from "react-router-dom";
import Nav from "./components/Nav";

import UsrSignUp from "./components/UsrSignUp";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import TableContent from "./components/TableContent";




class App extends React.Component {

    render() {

    return (
        <BrowserRouter>
           <div className='App'>
              <Route path='/Home' exact component={Nav}/>
               {/*<Route Path='/Home' exact component={SideBar}/>*/}
               <Route Path='/Home' exact component={TableContent}/>
               <Route path='/' exact component={UsrSignUp}/>
               <Route path='/' exact component={Footer}/>


           </div>
        </BrowserRouter>
    );
  }
}
export default App;

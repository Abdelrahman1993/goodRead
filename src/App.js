import React from 'react';
import './App.css';
import AdminLogin from "./components/AdminLogin"
import {BrowserRouter,Route ,Link} from "react-router-dom";
import AdminControl from "./components/AdminControl";
import UsrLogin from "./components/UsrLogin";
import UsrSignUp from "./components/UsrSignUp";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import EditCategory from "./components/EditCategory";

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
                {/*<Link to="/Admin">Admin</Link>*/}
            <div className='App container-fluid' >
               <Route path="/" exact component={UsrLogin}/>
                <Route path="/" exact component={UsrSignUp}/>
                {/*<Route path="/" exact component={SideBar}/>*/}

              {/*<Route path="/" exact component={Nav}/>*/}
              {/*<Route path="/" exact component={SideBar}/>*/}
              <Route path="/Admin" exact component={AdminLogin} />
              <Route path="/AdminControls" component={AdminControl}/>
            </div>
        </BrowserRouter>
    );
  }
}
export default App;

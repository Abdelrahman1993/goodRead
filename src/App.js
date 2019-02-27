import React from 'react';
import './App.css';
import AdminLogin from "./components/AdminLogin"
import Bookreview from "./components/BookReview"
import {BrowserRouter,Route ,Link} from "react-router-dom";
import AdminControl from "./components/AdminControl";
import UsrLogin from "./components/UsrLogin";
import UsrSignUp from "./components/UsrSignUp";
import Bookprofil from "./components/bookprofil";
import Authorprofil from "./components/authorprofile";
import Authorbook from "./components/authorbookprofile";

import Footer from "./components/Footer";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import EditCategory from "./components/EditCategory";
import BookReviewAlready from "./components/bookReviewAlready";

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
                {/*<Link to="/Admin">Admin</Link>*/}
            <div className='App container-fluid' >
               <Route path="/" exact component={UsrLogin}/>
                <Route path="/" exact component={UsrSignUp}/>
                {/*<Route path="/" exact component={SideBar}/>*/}
                <Route path="/authorbook.css" exact component={Nav}/>
                <Route path="/bookprofile" exact component={Bookprofil}/>
                <Route path="/bookprofile" exact component={BookReviewAlready}/>
                <Route path="/bookprofile" exact component={Bookreview}/>

                <Route path="/authorprofile" exact component={Nav}/>
                <Route path="/authorprofile" exact component={Authorprofil}/>
                <Route path="/authorprofile" exact component={Authorbook}/>
                {/*<Route path="/authorprofile" exact component={Authorbook}/>*/}
                {/*<Route path="/authorprofile" exact component={Bookreview}/>*/}

              <Route path="/home" exact component={Nav}/>
              <Route path="/home" exact component={SideBar}/>
              <Route path="/Admin" exact component={AdminLogin} />
              <Route path="/AdminControls" component={AdminControl}/>
            </div>
        </BrowserRouter>
    );
  }
}
export default App;

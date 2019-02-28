import React from 'react';
import './App.css';
import AdminLogin from "./components/AdminLogin"
import BookReview from "./components/BookReview"
import {BrowserRouter, Route, Link} from "react-router-dom";
import AdminControl from "./components/AdminControl";

import UsrLogin from "./components/UsrLogin";
// import LeftSideData from "./components/LeftSideData";
import UsrSignUp from "./components/UsrSignUp";

import BookProfile from "./components/bookprofil";
import AuthorProfile from "./components/authorprofile";
import AuthorBook from "./components/authorbookprofile";

// import Footer from "./components/Footer";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import Categories from "./components/categories";
import BookReviewAlready from "./components/bookReviewAlready";
import CategoryBooks from "./components/category";
import Books from "./components/books";
import Authors from "./components/authors";
import Search from "./components/search";


class App extends React.Component {

  render() {

    return (
        <BrowserRouter>
          <div className='App container-fluid'>
            <Route path="/" exact component={UsrLogin}/>
            <Route path="/" exact component={UsrSignUp}/>

            <Route path="/home" exact component={Nav}/>
            <Route path="/home" exact component={SideBar}/>

            <Route path="/categories/" exact component={Nav}/>
            <Route path="/categories/" exact component={Categories}/>

            <Route path='/categories/:id/:name' component={Nav}/>
            <Route path='/categories/:id/:name' component={CategoryBooks}/>

            <Route path="/books/" exact component={Nav}/>
            <Route path="/books/" exact component={Books}/>

            <Route path="/books/:id" exact component={Nav}/>
            <Route path="/books/:id" exact component={BookProfile}/>
            {/*<Route path="/books/:id" exact component={BookReviewAlready}/>*/}
            {/*<Route path="/books/:id" exact component={BookReview}/>*/}

            <Route path="/authors/" exact component={Nav}/>
            <Route path="/authors/" exact component={Authors}/>

            <Route path="/authors/:id" exact component={Nav}/>
            <Route path="/authors/:id" exact component={AuthorProfile}/>
            <Route path="/authors/:id" exact component={AuthorBook}/>

            <Route path="/search/:value" exact component={Search}/>

            <Route path="/Admin" exact component={AdminLogin}/>
            <Route path="/AdminControls" component={AdminControl}/>

          </div>
        </BrowserRouter>
    );
  }
}

export default App;

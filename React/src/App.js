import React from 'react';
import './App.css';
import {BrowserRouter,Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import AdminLogin from "./components/AdminLogin"
import AdminControl from "./components/AdminControl";

import UsrLogin from "./components/UsrLogin";
import UsrSignUp from "./components/UsrSignUp";

import TableContent from "./components/TableContent";

import Books from "./components/books";
import BookProfile from "./components/bookprofil";

import Authors from "./components/authors";
import AuthorProfile from "./components/authorprofile";
import AuthorBook from "./components/authorbookprofile";

import Categories from "./components/categories";
import Category from "./components/category";

import Search from "./components/search";
import Book from "./components/book_page";
import BookAthor from "./components/book_author";


class App extends React.Component {

  render() {

    return (
        <BrowserRouter>
          <div className='App'>
            <Route path='/' exact component={UsrLogin}/>
            <Route path='/' exact component={UsrSignUp}/>
            <Route path='/' exact component={Footer}/>

            <Route path='/home' exact component={Nav}/>
            <Route path='/home' exact component={TableContent}/>
            <Route path='/home' exact component={Footer}/>

            <Route path='/categories' exact component={Nav}/>
            <Route path='/categories' exact component={Categories}/>
            <Route path='/categories' exact component={Footer}/>

            <Route path='/categories/:id/:name' exact component={Nav}/>
            <Route path='/categories/:id/:name' exact component={Category}/>
            <Route path='/categories/:id/:name' exact component={Footer}/>

            <Route path='/books' exact component={Nav}/>
            <Route path='/books' exact component={Books}/>
            <Route path='/books' exact component={Footer}/>

            <Route path='/books/:id' exact component={Nav}/>
            <Route path='/books/:id' exact component={BookProfile}/>
            <Route path='/books/:id' exact component={Footer}/>

            <Route path="/search/:value" exact component={Search}/>

            <Route path='/authors' exact component={Nav}/>
            <Route path='/authors' exact component={Authors}/>
            <Route path='/authors' exact component={Footer}/>

            <Route path='/authors/:id' exact component={Nav}/>
            <Route path='/authors/:id' exact component={AuthorProfile}/>
            <Route path='/authors/:id' exact component={AuthorBook}/>
            <Route path='/authors/:id' exact component={Footer}/>

            <Route path="/Admin" exact component={AdminLogin} />
            <Route path="/AdminControls" exact component={AdminControl}/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;

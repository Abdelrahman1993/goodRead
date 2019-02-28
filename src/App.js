import React from 'react';
import './App.css';
import AdminLogin from "./components/AdminLogin"
import AdminControl from "./components/AdminControl";
import BookReview from "./components/BookReview"

import {BrowserRouter,Route ,Link} from "react-router-dom";

import UsrLogin from "./components/UsrLogin";
// import LeftSideData from "./components/LeftSideData";
import UsrSignUp from "./components/UsrSignUp";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import TableContent from "./components/TableContent";

import BookProfile from "./components/bookprofil";
import AuthorProfile from "./components/authorprofile";
// import AuthorBook from "./components/authorbookprofile";
import AuthorBook from "./components/author_books";

// import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Categories from "./components/categories";
// import EditCategory from "./components/EditCategory";
import BookReviewAlready from "./components/bookReviewAlready";
import CategoryBooks from "./components/category";
import Books from "./components/books";
import Authors from "./components/authors";
import Search from "./components/search";
import {Category} from "@material-ui/icons";
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
               {/*<Route path='/categoryId' exact component={Footer}/>*/}
               {/*<Route path='/category' exact component={Category}/>*/}
               <Route path='/books' exact component={Nav}/>
               <Route path='/books' exact component={Books}/>
               <Route path='/books' exact component={Footer}/>
               <Route path='/bookId' exact component={BookProfile}/>
               <Route path='/authors' exact component={Nav}/>
               <Route path='/authors' exact component={Authors}/>
               <Route path='/authors' exact component={Footer}/>
               <Route path='/authorProfile' exact component={AuthorProfile}/>
               <Route path='/authorProfile' exact component={AuthorBook}/>

<Route path='/ddd' exact component={BookAthor}/>

               {/*<Route Path='/Home' exact component={SideBar}/>*/}
               {/*<Route Path='/' exact component={TableContent}/>*/}
               {/*<Route path='/' exact component={UsrSignUp}/>*/}
               {/*<Route path='/' exact component={Footer}/>*/}

                {/*<Route path="/home" exact component={Nav}/>*/}
                {/*<Route path="/home" exact component={SideBar}/>*/}

                {/*<Route path="/categories/" exact component={Nav}/>*/}
                {/*<Route path="/categories/" exact component={Categories}/>*/}

                {/*<Route path='/categories/:id/:name' component={Nav} />*/}
                {/*<Route path='/categories/:id/:name' component={CategoryBooks} />*/}

                {/*<Route path="/search/:value" exact component={Search}/>*/}

                {/*<Route path="/books/" exact component={Nav}/>*/}
                {/*<Route path="/books/" exact component={Books}/>*/}

                {/*<Route path="/authors/" exact component={Nav}/>*/}
                {/*<Route path="/authors/" exact component={Authors}/>*/}

                {/*<Route path="/Admin" exact component={AdminLogin} />*/}
                {/*<Route path="/AdminControls" component={AdminControl}/>*/}

                {/*<Route path="/bookprofile" exact component={Nav}/>*/}
                {/*<Route path="/bookprofile" exact component={BookProfile}/>*/}
                {/*<Route path="/bookprofile" exact component={BookReviewAlready}/>*/}
                {/*<Route path="/bookprofile" exact component={BookReview}/>*/}

                {/*<Route path="/authorprofile" exact component={Nav}/>*/}
                {/*<Route path="/authorprofile" exact component={AuthorProfile}/>*/}
                {/*<Route path="/authorprofile" exact component={AuthorBook}/>*/}

            </div>
        </BrowserRouter>
    );
  }
}
export default App;

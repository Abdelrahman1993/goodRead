import React from 'react';
import './App.css';
import AdminLogin from "./components/AdminLogin"
import BookReview from "./components/BookReview"
import {BrowserRouter,Route ,Link} from "react-router-dom";
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
// import EditCategory from "./components/EditCategory";
import BookReviewAlready from "./components/bookReviewAlready";
import CategoryBooks from "./components/category";
import Books from "./components/books";
import Authors from "./components/authors";
import Search from "./components/search";


class App extends React.Component {

    render() {

    return (
        <BrowserRouter>
            <div className='App container-fluid' >
               <Route path="/" exact component={UsrLogin}/>
                <Route path="/" exact component={UsrSignUp}/>
                {/*<Route path="/" exact component={SideBar}/>*/}
                <Route path="/authorbook.css" exact component={Nav}/>


                <Route path="/home" exact component={Nav}/>
                <Route path="/home" exact component={SideBar}/>

                <Route path="/categories/" exact component={Nav}/>
                <Route path="/categories/" exact component={Categories}/>

                <Route path='/categories/:id/:name' component={Nav} />
                <Route path='/categories/:id/:name' component={CategoryBooks} />

                <Route path="/search/:value" exact component={Search}/>

                <Route path="/books/" exact component={Nav}/>
                <Route path="/books/" exact component={Books}/>

                <Route path="/authors/" exact component={Nav}/>
                <Route path="/authors/" exact component={Authors}/>

                <Route path="/Admin" exact component={AdminLogin} />
                <Route path="/AdminControls" component={AdminControl}/>

                <Route path="/bookprofile" exact component={Nav}/>
                <Route path="/bookprofile" exact component={BookProfile}/>
                <Route path="/bookprofile" exact component={BookReviewAlready}/>
                <Route path="/bookprofile" exact component={BookReview}/>

                <Route path="/authorprofile" exact component={Nav}/>
                <Route path="/authorprofile" exact component={AuthorProfile}/>
                <Route path="/authorprofile" exact component={AuthorBook}/>

            </div>
        </BrowserRouter>
    );
  }
}
export default App;

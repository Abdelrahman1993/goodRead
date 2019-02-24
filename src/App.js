import React from 'react';
import './App.css';
import AdminLogin from "./components/AdminLogin"
import {BrowserRouter,Route ,Link} from "react-router-dom";
import AdminControl from "./components/AdminControl";
import popular from "./components/popular";
import footer from "./components/footer";
import author_books from "./components/author_books";


class App extends React.Component {

  render() {
    return (
        <BrowserRouter>
            <div className='App container-fluid' >
                {/*<Link to="/Admin">Admin</Link>*/}
               {/*<Route path="/" exact component={author_books}/>*/}
              <Route path="/Admin" exact component={AdminLogin} />
              <Route path="/AdminControls" component={AdminControl}/>
            </div>
        </BrowserRouter>
    );
  }
}
export default App;

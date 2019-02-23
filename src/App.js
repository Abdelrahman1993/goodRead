import React from 'react';
import './App.css';
import AdminLogin from "./components/AdminLogin"
import {BrowserRouter,Route ,Link} from "react-router-dom";
import AdminControl from "./components/AdminControl";




class App extends React.Component {

  render() {
    return (
        <BrowserRouter>
            <div className='App container-fluid' >
                {/*<Link to="/Admin">Admin</Link>*/}
               {/*<Route path="/" exact component={book}/>*/}
              <Route path="/Admin" exact component={AdminLogin} />
              <Route path="/AdminControls" component={AdminControl}/>
            </div>
        </BrowserRouter>
    );
  }
}
export default App;

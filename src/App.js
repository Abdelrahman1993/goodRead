import React from 'react';
import './App.css';

import AdminLogin from "./components/AdminLogin"


class App extends React.Component {

  render() {
    return (
        <div className='App container-fluid' >
            <AdminLogin/>
        </div>
    );
  }
}
export default App;

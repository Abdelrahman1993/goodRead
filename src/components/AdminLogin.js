import React , {Component} from 'react';
import '../Styles/AdminPanel.css';


class AdminLogin extends Component {
    render() {
        return (

              <div className='container-fluid'>
                  <div className="row">
                      <div className=' offset-lg-3 col-lg-6 AdminPanelSection '>
                          <h3>Admin Panel</h3>
                          <hr/>
                          <form>
                              <div className="form-group">
                                  <label htmlFor="exampleInputEmail1">User Name</label>
                                  <input type="text" className="form-control"
                                          placeholder="User Name" />
                              </div>
                              <div className="form-group">
                                  <label htmlFor="exampleInputPassword1">Password</label>
                                  <input type="password" className="form-control" id="exampleInputPassword1"
                                         placeholder="Password"/>
                              </div>
                              <button type="submit" className="btn btn-primary">Submit</button>
                          </form>
                      </div>
                  </div>
              </div>
        );
    }
}
export default AdminLogin;
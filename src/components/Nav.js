import React , {Component} from 'react';
import '../App.css';


class Nav extends Component {

    render() {
        return (

         <div className='container-fluid navIBack '>
             <nav className="mb-1 navIBack navbar navbar-expand-lg navbar-dark orange lighten-1">
                 <a className="navbar-brand" href="#">GoodReads</a>
                 <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
                     <ul className="navbar-nav mr-auto">
                         <li className="nav-item active">
                             <a className="nav-link" href="#">Home
                                 <span className="sr-only">(current)</span>
                             </a>
                         </li>
                         <li className="nav-item">
                             <a className="nav-link" href="#">Categories</a>
                         </li>
                         <li className="nav-item">
                             <a className="nav-link" href="#">Books</a>
                         </li>
                         <li className="nav-item">
                             <a className="nav-link" href="#">Authors</a>
                         </li>
                         <li className="nav-item moveinput">
                             <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                         </li>

                     </ul>

                     <ul className="navbar-nav ml-auto nav-flex-icons moveAvata">

                         <li className="nav-item avatar">
                             <a className="nav-link p-0" href="#">
                                 <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
                                      className="rounded-circle z-depth-0" alt="avatar image" height="35"/>
                             </a>
                         </li>
                         <li className="nav-item ">
                             <a className="nav-link" href="#">UserName</a>
                         </li>
                         <li className="nav-item ">
                             <a className="nav-link">|</a>
                         </li>

                         <li className="nav-item ">
                             <a className="nav-link" href="#">Logout</a>
                         </li>
                     </ul>
                 </div>
             </nav>
         </div>

        );
    }
}
export default Nav;
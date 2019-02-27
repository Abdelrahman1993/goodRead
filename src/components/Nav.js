import React , {Component} from 'react';
import '../App.css';
import Cookies from 'universal-cookie';

class Nav extends Component {

     constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
        }
    }

    logout = () => {
        new Cookies().remove("token");
        window.location = "http://localhost:3000/";
    }

    render() {
        return (

         <div className='Nav'>
             <nav className="mb-1 navbar navbar-expand-lg navbar-dark orange lighten-1">
                 <a className="navbar-brand" href="#">GoodReads</a>
                 <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
                     <ul className="navbar-nav mr-auto">
                         <li className="nav-item active">
                             <a className="nav-link" href="#">Home
                                 <span className="sr-only">(current)</span>
                             </a>
                         </li>
                         <li className="nav-item">
                             <a className="nav-link" href="http://localhost:3000/categories/">
                                 Categories
                             </a>
                         </li>
                         <li className="nav-item">
                             <a className="nav-link" href="http://localhost:3000/books/">Books</a>
                         </li>
                         <li className="nav-item">
                             <a className="nav-link" href="http://localhost:3000/authors/">Authors</a>
                         </li>
                         <li className="nav-item moveinput" style={{width:300}}>
                             <input className="form-control" type="text"
                                    placeholder="Search" aria-label="Search"/>
                         </li>
                         <li className="nav-item ">
                             <button style={{background: "none",border: "none"}}
                                     className="nav-link"
                                >Search</button>
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
                             <a className="nav-link" href="#">
                                 {new Cookies().get("username")}
                             </a>
                         </li>
                         <li className="nav-item " width="25">
                             <button style={{background: "none",border: "none"}}
                                     className="nav-link"
                                onClick={this.logout}>Logout</button>
                         </li>
                     </ul>
                 </div>
             </nav>
         </div>

        );
    }
}
export default Nav;
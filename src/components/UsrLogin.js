import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Cookies from "universal-cookie";
import LoginUser from "../service/userLogin";
import "../App.css"

class UrsLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
        };
        this.hundleLogin = this.hundleLogin.bind(this);
    }

    handleUpdateEmail = (event) => {
        console.log(event.target.value);
        this.setState({
          email: event.target.value
        });
    }

    handleUpdatePassword = (event) => {
        console.log(event.target.value);
        this.setState({
          password: event.target.value
        });
    }

    hundleLogin() {
        LoginUser({
          'email': this.state.email,
          'password': this.state.password,
        }).then(data => {
            console.log(data);
          if (data.token) {
            let cookies = new Cookies();
            cookies.set('token', data.token, {path: '/'});
            cookies.set('username', data.name, {path: '/'});
            window.location = "http://localhost:3000/home";
          } else {
              alert("invalid email or password");
            window.location = "http://localhost:3000/";
          }
        });
    }

    render() {
        return (
            <div className='container-fluid ' >
                <div className='row '>
                    <div className='col-lg-12 '>
                        <div className="logo">
<div className=" UsrLogin loginDivSize" >
    <FormGroup className=" UsrLogin mb-2 mr-sm-2 mb-sm-0">
        <Input className="loginInput" type="name" name="name"
               placeholder="User name"
               value={this.state.email}
               onChange={this.handleUpdateEmail}/>
    </FormGroup>
</div>
                        <div className="UsrLogin loginDivSize" >
                            <FormGroup className="UsrLogin  mb-2 mr-sm-2 mb-sm-0">
                                <Input  type="password" name="password"
                                       placeholder="Password"
                                       value={this.state.password}
                                       onChange={this.handleUpdatePassword}/>
                            </FormGroup>
                    </div>

<div className=" UsrLogin loginDivSize">
    <Button className='btnMrgn' onClick={this.hundleLogin}>Login</Button>

</div>
                        </div>
            {/*<Form inline  className='  offset-lg-7 offset-md-7 offset-sm-7 offset-xs-7 ' >*/}


                    </div>
                </div>
            </div>
        );
    }
}
export default UrsLogin;

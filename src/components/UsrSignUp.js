import React from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import Cookies from "universal-cookie";
import SignUpUser from "../service/userSignUp";

class UsrSignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            // photo: '',
        };
        this.hundleSignUp = this.hundleSignUp.bind(this);
    }


    handleUpdateFirstName = (event) => {
        console.log(event.target.value);
        this.setState({
          firstName: event.target.value
        });
    }
    handleUpdateLastName = (event) => {
        console.log(event.target.value);
        this.setState({
          lastName: event.target.value
        });
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

    // handleUpdatePhoto = (event) => {
    //     this.setState({
    //       photo: event.target.files[0]
    //     });
    // }

    hundleSignUp() {
        SignUpUser({
            'firstName': this.state.firstName,
            'lastName': this.state.lastName,
            'email': this.state.email,
            'password': this.state.password,
            // 'photo': this.state.photo,
        }).then(data => {
            console.log(data);
            alert("sign up successfully please login");

        });
    }

    render() {
        return (
            <div className='container-fluid' >
                <div className='row '  >
                    <div className='offset-lg-7 col-lg-4 col-md-4 col-sm-4 col-xs-4 SignUp'>
                        <h4>Don`t Have an Account ? Create one</h4>
                        <hr/>
                    <Form>
                    <FormGroup>
                        <Input type="name" name="fname" placeholder="First name"
                               value={this.state.firstName}
                               onChange={this.handleUpdateFirstName}/>
                    </FormGroup>
                        <FormGroup>
                            <Input type="name" name="lname"  placeholder="Last name"
                                    value={this.state.lastName}
                                    onChange={this.handleUpdateLastName}/>
                        </FormGroup>
                        <FormGroup>
                            <Input type="email" name="email" placeholder="E-mail"
                                    value={this.state.email}
                                    onChange={this.handleUpdateEmail}/>
                        </FormGroup>
                    <FormGroup>
                        <Input type="password" name="password" placeholder="password "
                                value={this.state.password}
                               onChange={this.handleUpdatePassword}/>
                    </FormGroup>
                    {/*<FormGroup>*/}
                        {/*<Label >File</Label>*/}
                        {/*<Input type="file" name="photo"*/}
                                {/*onChange={this.handleUpdatePhoto}/>*/}
                    {/*</FormGroup>*/}
                    <Button onClick={this.hundleSignUp}> Sign up</Button>
                </Form>
                    </div>
                </div>
            </div>
        );
    }
}
export default UsrSignUp;

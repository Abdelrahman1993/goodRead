import React from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

class UsrSignUp extends React.Component {

    render() {
        return (
            <div className='container-fluid' >
                <div className='row '  >
                    <div className='offset-lg-7 col-lg-4 col-md-4 col-sm-4 col-xs-4 SignUp'>
                        <h4>Dont Have an Account ? Create one</h4>
                        <hr/>
                    <Form>
                    <FormGroup>
                        <Input type="name" name="fname" placeholder="First name" />
                    </FormGroup>
                        <FormGroup>
                            <Input type="name" name="lname"  placeholder="Last name" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="email" name="email" placeholder="E-mail" />
                        </FormGroup>
                    <FormGroup>
                        <Input type="password" name="password" placeholder="password " />
                    </FormGroup>
                    <FormGroup>
                        <Label >File</Label>
                        <Input type="file" name="photo"  />

                    </FormGroup>
                    <Button> Sign up</Button>
                </Form>
                    </div>
                </div>
            </div>
        );
    }
}
export default UsrSignUp;

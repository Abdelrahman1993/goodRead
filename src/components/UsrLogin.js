import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class UrsLogin extends React.Component {

    render() {
        return (
            <div className='container-fluid' >
                <div className='row '  >
                    <div className='col-lg-12 UsrLogin'>
            <Form inline  className='  offset-lg-7 offset-md-7 offset-sm-7 offset-xs-7 ' >
                <FormGroup className=" mb-2 mr-sm-2 mb-sm-0">
                    <Input type="name" name="name"  placeholder="User name" />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input type="password" name="password"  placeholder="Password" />
                </FormGroup>
                <Button>Login</Button>
            </Form>
                    </div>
                </div>
            </div>
        );
    }
}
export default UrsLogin;

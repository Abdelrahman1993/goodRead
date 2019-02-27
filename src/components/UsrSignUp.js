import React from 'react';
import {Button, Form, FormGroup, Label, Input, Col, Row, Card, CardText, CardTitle} from 'reactstrap';
import UrsLogin from "./UsrLogin";
class UsrSignUp extends React.Component {

    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12'>
                    <UrsLogin/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-7 col-md-7 col-sm-7 col-xs-7 cola '>
                        <Row>
                            <Col sm="6" className='marg'>
                                <Card body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <img src="react_project\public\4.png"/>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Go somewhere</Button>
                                </Card>
                            </Col>
                            <Col sm="6">
                                <Card body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <img src="react_project\public\4.png"/>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Go somewhere</Button>
                                </Card>
                            </Col>

                        </Row>
                        <Row>
                            <Col sm="6">
                                <Card body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <img src="react_project\public\4.png"/>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Go somewhere</Button>
                                </Card>
                            </Col>
                            <Col sm="6">
                                <Card body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <img src="react_project\public\4.png"/>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Go somewhere</Button>
                                </Card>
                            </Col>

                        </Row>


                    </div>


                    <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4 '>
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

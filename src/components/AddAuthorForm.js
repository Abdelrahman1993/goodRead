import React , {Component} from 'react';
import {Button, Form, FormGroup, Input, Label, ModalBody, ModalFooter, ModalHeader, Table} from "reactstrap";
import {Modal} from "reactstrap"

class AddAuthorForm extends Component {

    constructor(props) {
        super(props);
        this.state={
            modalIsOpen: false
        };
        this.handle_modal = this.handle_modal.bind(this);
    }
    handle_modal() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    render() {
        return (
            <div>
                <button onClick={this.handle_modal} className='btn btn-info offset-lg-10  offset-md-10  offset-sm-10  offset-xs-10 add_category'>{this.props.title} +</button>
                <Modal isOpen={this.state.modal} toggle={this.handle_modal} className={this.props.className}>
                    <ModalHeader toggle={this.handle_modal}>{this.props.title}</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="name">{this.props.first}</Label>
                                <Input type="name" name="firstname" id="fname" placeholder="First Name" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="name">{this.props.second}</Label>
                                <Input type="name" name="lastname" id="lname" placeholder="Last Name" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect">Select Category</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>ahmed</option>
                                    <option>mohamed</option>
                                    <option>hesham</option>
                                    <option>awad</option>
                                    <option>abdo</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect">Select Author</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>ahmed</option>
                                    <option>mohamed</option>
                                    <option>hesham</option>
                                    <option>awad</option>
                                    <option>abdo</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <input type="date" name="dateofbirth" id="dateofbirth"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleFile">Upload Image</Label>
                                <Input type="file" name="file" id="exampleFile" />
                            </FormGroup>
                        </Form>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handle_modal}>{this.props.title}</Button>{' '}
                        <Button color="secondary" onClick={this.handle_modal}>{this.props.cancel}</Button>
                    </ModalFooter>
                </Modal>

                <Table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Photo</th>
                        <th>First Name</th>
                        <th>Date of Birth</th>
                        <th>Actions</th>

                    </tr>
                    </thead>
                </Table>


            </div>);
    }
}
export default AddAuthorForm;
import React , {Component} from 'react';
import {Button, Form, FormGroup, Input, Label, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {Modal} from "reactstrap"

class AddCategoryForm extends Component {

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
                    <FormGroup>
                        <Input type="name" name="name" id="name" placeholder="Add Category" />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.handle_modal}>{this.props.title}</Button>{' '}
                    <Button color="secondary" onClick={this.handle_modal}>{this.props.cancel}</Button>
                </ModalFooter>
            </Modal>

        </div>);
    }
}
export default AddCategoryForm;
import React , {Component} from 'react';
import {Button, Col, Form, FormGroup, Input, Label, ModalBody, ModalFooter, ModalHeader, Table} from "reactstrap";
import {Modal} from "reactstrap"

class EditCategory extends Component {

    constructor(props) {
        super(props);
        this.state={

            modalIsOpen: false,

        };
        this.handling_modal = this.handling_modal.bind(this);

    }

    handling_modal() {
        this.setState(prevState => ({
            EditModal: !prevState.EditModal
        }));
    }


    render() {

        return (
            <div>
                <button onClick={this.handling_modal} className='btn btn-info offset-lg-10  offset-md-10  offset-sm-10  offset-xs-10 add_category'>{this.props.title} +</button>
                <Modal isOpen={this.state.EditModal} toggle={this.handling_modal} className={this.props.className}>
                    <ModalHeader toggle={this.handling_modal}>{this.props.title}</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Input type="name" name="name" id="name" placeholder="Edit Category"  />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handling_modal} >{this.props.title}</Button>{' '}
                        <Button color="secondary" onClick={this.handling_modal}>{this.props.cancel}</Button>
                    </ModalFooter>
                </Modal>
            </div>

        );
    }
}
export default EditCategory;
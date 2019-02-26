import React , {Component} from 'react';
import {Button, Col, Form, FormGroup, Input, Label, ModalBody, ModalFooter, ModalHeader, Table} from "reactstrap";
import {Modal} from "reactstrap"

class AddCategoryForm extends Component {

    constructor(props) {
        super(props);
        this.state={

            modalIsOpen: false,
            newCategory: "",
            categories : [{text:'Mango'} , {text:'chicken'}],

        };
        this.handle_modal = this.handle_modal.bind(this);
        this.handling_modal = this.handling_modal.bind(this);

    }

    handle_modal() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }


    handling_modal() {
        this.setState(prevState => ({
            EditModal: !prevState.EditModal
        }));
    }



    handle_updateCategory =(event)=>{
        this.setState({
            newCategory :event.target.value
        });
    }

    handle_addCategory =()=>{
        const categories = [...this.state.categories];
        categories.push({
            text:this.state.newCategory,

        });
        this.setState({
            categories,
            newCategory : "",
        });

    }

    render() {

        return (
            <div>
                <button onClick={this.handle_modal} className='btn btn-info offset-lg-10  offset-md-10  offset-sm-10  offset-xs-10 add_category'>
                    {this.props.title} +</button>
            <Modal isOpen={this.state.modal} toggle={this.handle_modal} className={this.props.className}>
                <ModalHeader toggle={this.handle_modal}>{this.props.title}</ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Input type="name" name="name" id="name" placeholder="Add Category" value={this.state.newCategory} onChange={this.handle_updateCategory} />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.handle_modal} onClick={this.handle_addCategory}>{this.props.title}</Button>{' '}
                    <Button color="secondary" onClick={this.handle_modal}>{this.props.cancel}</Button>
                </ModalFooter>
            </Modal>

                <Modal isOpen={this.state.EditModal} toggle={this.handling_modal} className={this.props.className}>
                    <ModalHeader toggle={this.handling_modal}>Edit Category</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Input type="name" name="name" id="name" placeholder="Edit Category"  />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handling_modal} >Edit</Button>{' '}
                        <Button color="secondary" onClick={this.handling_modal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                    <Table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Category name</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <thead>
                    {this.state.categories.map((category , index) =>
                        <tr>
                            <th>{index+1}</th>
                            <th key={index}>
                                {category.text}
                            </th>
                            <th>
                                <button type="button" className="btn btn-info" onClick={this.handling_modal}>Edit</button> {" "}
                                <button type="button" className="btn btn-danger">Delete</button> </th>
                        </tr>)}
                    </thead>
                </Table>
        </div>

        );
    }
}
export default AddCategoryForm;
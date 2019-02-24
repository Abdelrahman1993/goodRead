import React , {Component} from 'react';
import {
    Button,
    Form,
    FormGroup,
    FormText,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Table
} from "reactstrap";

class AddBookForm extends Component{

    constructor(props) {
        super(props);
        this.state={

            modalIsOpen: false,
            books : [{id:1 , photo:"photo",name:"hesham",cat:"the cat",author:"no one"}],
            newBook:''
        };
        this.handle_modal = this.handle_modal.bind(this);
    }
    handle_modal() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    handle_addBook =()=>{
        const books = [...this.state.books];
        books.push({
            id:this.state.newBook,
            photo:this.state.newBook,
            name:this.state.newBook,
            cat:this.state.newBook,
            author: this.state.newBook
        });
        this.setState({
            books,
            newBook :'',

        });
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
                                <Label for="name">Book name</Label>
                                <Input type="name" name="name" id="name" placeholder="Book name" />
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
                                <Label for="exampleFile">Upload Image</Label>
                                <Input type="file" name="file" id="exampleFile" />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handle_modal} onClick={this.handle_addBook}>{this.props.title}</Button>{' '}
                        <Button color="secondary" onClick={this.handle_modal}>{this.props.cancel}</Button>
                    </ModalFooter>


                </Modal>
                <Table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>CategoryID</th>
                        <th>AuthorID</th>
                        <th>Actions</th>
                    </tr>
                    </thead>

                    <thead>
                    {this.state.books.map((book , index) =>
                        <tr>
                            <th>{index+1}</th>
                            <th key={index}>
                                {book.photo}
                            </th>
                            <th>{book.name}</th>
                            <th>{book.cat}</th>
                            <th>{book.author}</th>
                            <th>
                                <button type="button" className="btn btn-info">Edit</button> {" "}
                                <button type="button" className="btn btn-danger">Delete</button> </th>
                        </tr>)}

                    </thead>
                </Table>
            </div>);
    }
}
export default AddBookForm;
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
import GetBooks from "../service/book";
import DeleteBook from "../service/delBook";
import GetCategories from "../service/category";
import AddBook from "../service/addBook";
import GetAuthors from "../service/author";

class AddBookForm extends Component{

    constructor(props) {
        super(props);
        this.state={
            modalIsOpen: false,
            books: [],
            authors: [],
            newBook: {},
            categories: [],
        };
        this.handle_modal = this.handle_modal.bind(this);
    }
    handle_modal() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    handle_updateBook =(event)=>{
        if(event.target.name === "name") {
            this.setState({
                newBook: {...this.state.newBook, name: event.target.value,}
            });
        } else if(event.target.name === "select") {
            console.log(event.target.value);
            this.setState({
                newBook: {...this.state.newBook, categoryId: event.target.value,}
            });
        } else if(event.target.name === "select1") {
            console.log(event.target.value);
            this.setState({
                newBook: {...this.state.newBook, authorId: event.target.value,}
            });
        } else if(event.target.name === "file") {
            let path = event.target.value.split('\\');
            this.setState({
                newBook: {...this.state.newBook, photo: path[2],}
            });
        }

    }

    handle_addBook =()=>{
        AddBook(this.state.newBook).then(data => {
            console.log(data);
            GetBooks().then((data) => {
                this.setState({
                    books: data,
                    newBook :'',
                });
            })
        });
    }

    deletRow = (index) =>{
        const books = [...this.state.books];
        console.log(books[index.target.value]._id);
        DeleteBook(books[index.target.value]._id).then((data) => {
            console.log(data);
        });
        books.splice(index.target.value,1);
        this.setState({books});
    }
    componentDidMount(){
      GetBooks()
      .then(data => {
        this.setState({
            books: data,
        })
      });
      GetCategories()
      .then(data => {
        this.setState({
            categories: data,
            newBook: {...this.state.newBook, categoryId: data[0]._id},
        });
      });
      GetAuthors()
      .then(data => {
        this.setState({
            authors: data,
            newBook: {...this.state.newBook, authorId: data[0]._id},
        })
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
                                <Input type="name" name="name" id="name"
                                       placeholder="Book name" value={this.state.newBook.name}
                                       onChange={this.handle_updateBook}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect">Select Category</Label>
                                <Input type="select" name="select" id="exampleSelect"
                                       onChange={this.handle_updateBook}>
                                    {this.state.categories.map((category, index) =>
                                        <option value={category._id}>{category.name}</option>
                                    )}
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect">Select Author</Label>
                                <Input type="select" name="select1" id="exampleSelect"
                                       value={this.state.newBook.authorId}
                                       onChange={this.handle_updateBook}>
                                    {this.state.authors.map((author, index) =>
                                        <option value={author._id}>
                                            {author.firstName +" "+ author.lastName}
                                        </option>
                                    )}
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleFile">Upload Image</Label>
                                <Input type="file" name="file" id="exampleFile" onChange={this.handle_updateBook}/>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handle_modal}
                                onClick={this.handle_addBook}>{this.props.title}</Button>{' '}
                        <Button color="secondary" onClick={this.handle_modal}>{this.props.cancel}</Button>
                    </ModalFooter>


                </Modal>
                <Table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                    </thead>

                    <thead>
                    {this.state.books.map((book , index) =>
                        <tr>
                            <th>{index+1}</th>
                            <th key={index}>
                                <img src={book.photo} width="50" height="50" alt="error image"/>
                            </th>
                            <th>{book.name}</th>
                            <th>{book.categoryId.name}</th>
                            <th>{book.authorId.firstName +" "+book.authorId.lastName}</th>
                            <th>
                                <button type="button" className="btn btn-info">Edit</button> {" "}
                                <button value= {index} onClick={this.deletRow.bind(this)}
                                    type="button" className="btn btn-danger">Delete</button> </th>
                        </tr>)}

                    </thead>
                </Table>
            </div>);
    }
}
export default AddBookForm;
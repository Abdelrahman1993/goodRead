import React , {Component} from 'react';
import {Button, Form, FormGroup, Input, Label, ModalBody, ModalFooter, ModalHeader, Table} from "reactstrap";
import {Modal} from "reactstrap"
import GetAuthors from "../service/author";
import AddAuthor from "../service/addAuthor";
import DeleteAuthor from "../service/delAuthor";

class AddAuthorForm extends Component {

    constructor(props) {
        super(props);
        this.state={
          modalIsOpen: false,
          authors: [],
          newAuthor: "",
        };
        this.handle_modal = this.handle_modal.bind(this);
    }
    handle_modal() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    componentDidMount(){
      GetAuthors()
      .then(data => {
        this.setState({
            authors: data,
        })
      });
    }

    handle_updateAuthor =(event)=>{
      if(event.target.name === "firstname") {
            this.setState({
                newAuthor: {...this.state.newAuthor, firstName: event.target.value,}
            });
        } else if(event.target.name === "lastname") {
          this.setState({
            newAuthor: {...this.state.newAuthor, lastName: event.target.value,}
          });
        } else if(event.target.name === "dateofbirth") {
            console.log(event.target.value);
            this.setState({
              newAuthor: {...this.state.newAuthor, dateOfBirth: event.target.value,}
            });
        } else if(event.target.name === "file") {
            let path = event.target.value.split('\\');
            this.setState({
                newAuthor: {...this.state.newAuthor, photo: path[2],}
            });
        }

    }
    handle_addAuthor =()=>{
        AddAuthor(this.state.newAuthor).then(data => {
          console.log(data);
            GetAuthors()
            .then(data => {
                this.setState({
                    authors: data,
                    newAuthor : "",
                });
            });
        });
    }

    deletRow = (index) =>{
        const authors = [...this.state.authors];
        console.log(authors[index.target.value]._id);
        DeleteAuthor(authors[index.target.value]._id).then((data) => {
            console.log(data);
        });
        authors.splice(index.target.value,1);
        this.setState({authors});
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
                                <Input type="name" name="firstname" id="fname"
                                onChange={this.handle_updateAuthor}
                                       placeholder="First Name" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="name">{this.props.second}</Label>
                                <Input type="name" name="lastname" id="lname"
                                onChange={this.handle_updateAuthor}
                                       placeholder="Last Name" />
                            </FormGroup>
                            <FormGroup>
                                <input type="date" name="dateofbirth" id="dateofbirth"
                                onChange={this.handle_updateAuthor}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleFile">Upload Image</Label>
                                <Input type="file" name="file" id="exampleFile"
                                onChange={this.handle_updateAuthor}/>
                            </FormGroup>
                        </Form>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handle_modal} onClick={this.handle_addAuthor} >{this.props.title}</Button>{' '}
                        <Button color="secondary" onClick={this.handle_modal}>{this.props.cancel}</Button>
                    </ModalFooter>
                </Modal>

                <Table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Photo</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date of Birth</th>
                        <th>Actions</th>

                    </tr>
                    </thead>
                    <thead>
                    {this.state.authors.map((author , index) =>
                        <tr>
                            <th>{index+1}</th>
                            <th key={index}>
                                {author.photo}
                            </th>
                            <th>
                                {author.firstName}
                            </th>
                            <th>
                                {author.lastName}
                            </th>
                            <th>
                                {author.dateOfBirth}
                            </th>
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
export default AddAuthorForm;
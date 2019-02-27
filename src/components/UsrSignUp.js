import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  Card,
  CardText,
  CardTitle,
  ListGroupItem,
  ListGroup
} from 'reactstrap';
import SignUpUser from "../service/userSignUp";
import GetBooks from "../service/book";
import GetCategories from "../service/category";
import GetAuthors from "../service/author";

class UsrSignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      // photo: '',
      books: [],
      authors: [],
      categories: [],
    };
    this.hundleSignUp = this.hundleSignUp.bind(this);
  }

  componentDidMount() {
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

  handleUpdateFirstName = (event) => {
    console.log(event.target.value);
    this.setState({
      firstName: event.target.value
    });
  }
  handleUpdateLastName = (event) => {
    console.log(event.target.value);
    this.setState({
      lastName: event.target.value
    });
  }
  handleUpdateEmail = (event) => {
    console.log(event.target.value);
    this.setState({
      email: event.target.value
    });
  }
  handleUpdatePassword = (event) => {
    console.log(event.target.value);
    this.setState({
      password: event.target.value
    });
  }

  // handleUpdatePhoto = (event) => {
  //     this.setState({
  //       photo: event.target.files[0]
  //     });
  // }

  hundleSignUp() {
    SignUpUser({
      'firstName': this.state.firstName,
      'lastName': this.state.lastName,
      'email': this.state.email,
      'password': this.state.password,
      // 'photo': this.state.photo,
    }).then(data => {
      console.log(data);
      alert("sign up successfully please login");

    });
  }

  render() {
    return (
        <div className='container-fluid'>
          {/*<div className='row'>*/}
          {/*<div className='col-lg-12'>*/}
          {/*<UrsLogin/>*/}
          {/*</div>*/}
          {/*</div>*/}
          <div className='row'>
            <div className='col-lg-7 col-md-7 col-sm-7 col-xs-7 cola '>
              <Row>
                <Col sm="6" className='marg'>
                  <Card body>
                    <CardTitle>Popular Authors</CardTitle>
                    <ListGroup>
                      {this.state.authors.slice(0, 3).map((author, index) =>
                        <ListGroupItem key={index}>{author.firstName + " " + author.lastName}</ListGroupItem>
                      )}
                    </ListGroup>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Popular Books</CardTitle>
                    <ListGroup>
                      {this.state.books.slice(0, 3).map((book, index) =>
                        <ListGroupItem key={index}>{book.name}</ListGroupItem>
                      )}
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Popular Categories</CardTitle>
                    <ListGroup>
                      {this.state.categories.slice(0, 3).map((category, index) =>
                        <ListGroupItem key={index}>{category.name}</ListGroupItem>
                      )}
                    </ListGroup>
                  </Card>
                </Col>
                {/*<Col sm="6">*/}
                {/*<Card body>*/}
                {/*<CardTitle>Special Title Treatment</CardTitle>*/}
                {/*<img src="react_project\public\4.png"/>*/}
                {/*<CardText>With supporting text below as a natural lead-in to additional content.</CardText>*/}
                {/*<Button>Go somewhere</Button>*/}
                {/*</Card>*/}
                {/*</Col>*/}
              </Row>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4 '>
              <h4>Dont Have an Account ? Create one</h4>
              <hr/>
              <Form>
                <FormGroup>
                  <Input type="name" name="fname" placeholder="First name"
                         value={this.state.firstName}
                         onChange={this.handleUpdateFirstName}/>
                </FormGroup>
                <FormGroup>
                  <Input type="name" name="lname" placeholder="Last name"
                         value={this.state.lastName}
                         onChange={this.handleUpdateLastName}/>
                </FormGroup>
                <FormGroup>
                  <Input type="email" name="email" placeholder="E-mail"
                         value={this.state.email}
                         onChange={this.handleUpdateEmail}/>
                </FormGroup>
                <FormGroup>
                  <Input type="password" name="password" placeholder="password "
                         value={this.state.password}
                         onChange={this.handleUpdatePassword}/> </FormGroup>
                {/*<FormGroup>*/}
                {/*<Label>File</Label>*/}
                {/*<Input type="file" name="photo"/>*/}
                {/*</FormGroup>*/}
                {/*<FormGroup>*/}
                {/*<Label >File</Label>*/}
                {/*<Input type="file" name="photo"*/}
                {/*onChange={this.handleUpdatePhoto}/>*/}
                {/*</FormGroup>*/}
                <Button onClick={this.hundleSignUp}> Sign up</Button>
              </Form>
            </div>

          </div>
        </div>
    );
  }
}

export default UsrSignUp;

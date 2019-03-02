import React, {Component} from 'react';
import {CardBody, Input, Progress, Table} from 'reactstrap';
import SideBar from "./SideBar";
import MyStarRating from "./StarRating";
import GetBooks from "../service/book";
import StarRatings from 'react-star-ratings';
import Cookies from "universal-cookie";
import GetUser from "../service/getuser";
import SetStatusReading from "../service/updateReadingStatus";
import {Link} from "react-router-dom";
export default class TableContent extends Component {

  constructor(props) {
    super(props);
    this.allBooks = [];
    this.state = {
      allBooks: [],
      currentBooks: [],
    };
  }

  componentDidMount() {
    console.log(new Cookies().get("currentUser"));
    GetBooks().then((data) =>{
      // console.log(data);
      this.allBooks = data;
      this.setState({
        currentBooks: data,
      })
    })
  }

  all = () => {
      this.setState({
        currentBooks: this.allBooks,
      })
  }
  read = () => {
    let currentUser = new Cookies().get("currentUser");
    console.log(currentUser._id);
    GetUser(currentUser._id).then((data) => {
      let books = data.selectedBooks;
      let newBooks = [];
      this.allBooks.map((book) => {
        books.map((selet)=>{
          if(selet.bookId === book._id){
            if(selet.shelve === "read") {
              newBooks.push(book);
            }
          }
        })
      })
      this.setState({
        currentBooks : newBooks,
      })
    })
  }
  currentlyRead = () => {
    let currentUser = new Cookies().get("currentUser");
    console.log(currentUser._id);
    GetUser(currentUser._id).then((data) => {
      let books = data.selectedBooks;
      let newBooks = [];
      this.allBooks.map((book) => {
        books.map((selet)=>{
          if(selet.bookId === book._id){
            if(selet.shelve === "reading") {
              newBooks.push(book);
            }
          }
        })
      })
      this.setState({
        currentBooks : newBooks,
      })
    })
  }

  wantToRead = () => {
    let currentUser = new Cookies().get("currentUser");
    console.log(currentUser._id);
    GetUser(currentUser._id).then((data) => {
      let books = data.selectedBooks;
      let newBooks = [];

      this.allBooks.map((book) => {
        books.map((selet)=>{
          if(selet.bookId === book._id){
            if(selet.shelve === "want to read") {
              newBooks.push(book);
            }
          }
        })
      })
      this.setState({
        currentBooks : newBooks,
      })
    })
  }

  handle_status_reading = (event) => {
    console.log(event.target.value);
    console.log(event.target.getAttribute("bookid"));
    SetStatusReading({
      'readingStatus': event.target.value,
      'bookId': event.target.getAttribute("bookid"),
      'userId': new Cookies().get("currentUser")._id,
    }).then((data)=>{
      console.log(data);
    })
  }

  render() {
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <SideBar all={this.all} read={this.read}
                       currentlyRead={this.currentlyRead} wantToRead={this.wantToRead}/>
            </div>
            <div className="col-lg-9">
              <Table>
                <thead>
                <tr>
                  <th>#</th>
                  <th>Cover</th>
                  <th>Name</th>
                  <th>Author</th>
                  <th>Avg Rate</th>
                  <th>Rating</th>
                  <th>shelve</th>
                </tr>
                </thead>
                <tbody>
                  {this.state.currentBooks.map((book, index) =>
                    <tr>
                      <th scope="row">{index}</th>
                      <td>
                        <img src={"http://localhost:4000/"+book.photo}
                                     width="50" height="50" alt="error image"/>
                      </td>
                      <td>
                        <Link to={"/books/" + book._id}>
                          {book.name}
                        </Link>
                      </td>
                      <td>
                        <Link to={"/authors/" + book.authorId._id}>
                          {book.authorId.firstName + " " + book.authorId.lastName}
                        </Link>

                      </td>
                      <td>
                        <Progress value={book.rate}/>
                      </td>
                      <td><MyStarRating/></td>
                      <td>
                        <Input width="50%" type="select"
                         name="select1" id="exampleSelect" bookid={book._id}
                         onChange={this.handle_status_reading}
                          >
                          <option value="read">read</option>
                          <option value="want to read">want to read</option>
                          <option value="reading">reading</option>
                          <option value="not read">not read</option>
                        </Input>

                      </td>
                      </tr>
                  )}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
    );
  }
}
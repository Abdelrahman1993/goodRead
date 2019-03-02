import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import GetMatched from "../service/search";
import Cookies from "universal-cookie";
import {Link} from "react-router-dom";

export default class Example extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      matchedBooks: [],
      matchedAuthors: [],
      matchedCategories: [],
    };
  }

  componentDidMount() {

    let cookies = new Cookies();
    if (!cookies.get('token')) {
      window.location = "http://localhost:3000/";
    }

    GetMatched({
      'searchValue': this.props.match.params.value
    }).then((data)=> {
      console.log(data);
      this.setState({
        matchedBooks: data.matchedBooks,
        matchedAuthors: data.matchedAuthors,
        matchedCategories: data.matchedCategories,
      })
    })
  }

  render() {
    return (
        <div>
          <h1> Search Results </h1>
          <ListGroup>
            <h4>Results in Categories</h4>
            {this.state.matchedCategories.map((cat, index)=>
              <ListGroupItem key={index}>
                <Link to={"/categories/" + cat._id+"/"+ cat.name}>
                  {cat.name}
                </Link>
              </ListGroupItem>
            )}

            <h4>Results in Books</h4>
            {this.state.matchedBooks.map((book, index)=>
              <ListGroupItem key={index}>
                <Link to={"/books/" + book._id}>
                  {book.name}
                </Link>
              </ListGroupItem>
            )}
            <h4>Results in Authors</h4>
            {this.state.matchedAuthors.map((auth, index)=>
              <ListGroupItem key={index}>
                <Link to={"/authors/" + auth._id}>
                  {auth.firstName + " " + auth.lastName}
                </Link>
              </ListGroupItem>
            )}
          </ListGroup>
        </div>
    );
  }
}

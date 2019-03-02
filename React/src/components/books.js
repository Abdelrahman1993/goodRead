import React ,{Component} from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import GetBooks from "../service/book";
import Cookies from "universal-cookie";
import {Link} from "react-router-dom";

class Books extends Component {

  constructor(props) {
    super(props);
    this.state={
        books : [],
    };
  }

  componentDidMount(){

    let cookies = new Cookies();
    if (!cookies.get('token')) {
      window.location = "http://localhost:3000/";
    }

    GetBooks()
    .then(data => {
      this.setState({
          books: data,
      });
    });
  }

  render() {
    return (
        <div>
          <h1>Books</h1>
          {this.state.books.map((book , index) =>
            <div className="thumb" key={index}>
            <Card>
              <img style={{width:200, height:100}}
                   src={"http://localhost:4000/"+book.photo}
                   alt="Card image cap"/>
              <CardBody>
                <CardTitle>
                  <Link to={'/books/'+book._id}>
                    {book.name}
                  </Link>
                </CardTitle>
              </CardBody>
            </Card>
            </div>
          )}
        </div>
    );
  }
}

export default Books;

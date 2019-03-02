import React ,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import GetBooks from "../service/book";
import Cookies from "universal-cookie";
import Link from "react-router-dom/es/Link";


class CategoryBooks extends Component {

  constructor(props) {
    super(props);
    this.state={
        books : [],
        catId : this.props.match.params.id,
        catName: this.props.match.params.name,
    };
  }

  componentDidMount(){
    let cookies = new Cookies();
    if (!cookies.get('token')) {
      window.location = "http://localhost:3000/";
    }
    GetBooks()
    .then(data => {
      console.log(data);
      return data.filter((book) => {
          // console.log(this.state.catName);
          return book.categoryId._id === this.state.catId;
      });
    }).then(data => {
      console.log(data);
      this.setState({
          books: data,
      })
    });
  }

  render() {
    return (
        <div>
          <h1>{this.state.catName}</h1>
          {this.state.books.map((book , index) =>
            <div className="thumb" key={index}>
            <Card>
              <img style={{width:200, height:100}}
                   src={"http://localhost:4000/"+book.photo}
                   alt="Card image cap"/>
              <CardBody>
                <CardTitle>
                  <Link to={"/books/" + book._id}>
                    {book.name}
                  </Link>
                  {/*<a href={"http://localhost:3000/books/"+book._id}>*/}
                    {/*{book.name}*/}
                  {/*</a>*/}
                </CardTitle>
              </CardBody>
            </Card>
            </div>
          )}
        </div>
    );
  }
}

export default CategoryBooks;

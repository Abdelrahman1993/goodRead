import React ,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import GetBooks from "../service/book";

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
            <div key={index}>
            <Card>
              <CardImg top width="50px" height="50px"
                       src={"http://localhost:4000/"+book.photo}
                       alt="book image"/>
              <CardBody>
                <CardTitle>
                  <a href={"http://localhost:3000/books/"+book._id}>
                    {book.name}
                  </a>
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

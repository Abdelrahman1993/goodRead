import React, {Component} from 'react';
import {
  Progress, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Input, FormGroup
} from 'reactstrap';
import '../Styles/bookprofile.css';
import Cookies from "universal-cookie";
import GetBook from "../service/currentBook";

class Bookprofil extends Component {

  constructor(props) {
    super(props);
    this.state={
      currentBook : '',
      bookId : this.props.match.params.id,
      author: '',
      category: '',
    };
  }

  componentDidMount(){
    let cookies = new Cookies();
    if (!cookies.get('token')) {
      window.location = "http://localhost:3000/";
    }

    GetBook(this.state.bookId).then((data) => {
      console.log(data);
      this.setState({
        currentBook: data,
        author: data.authorId,
        category: data.categoryId,
      });
    })

  }

  render() {

    return (
        <div className="container-fluid">
          <div className="row BookPage">
            <div className="col_trainings BookImg">
              <div className="Img">
                  <img style={{width:150, height:200}}
                       src={"http://localhost:4000/"+this.state.currentBook.photo}
                       alt="Card image cap"/>
               </div>
              <div>
                <Input width="50%" type="select" name="select1" id="exampleSelect">
                  <option>want to read</option>
                  <option>reading</option>
                  <option>read</option>
                </Input>

                <CardBody>
                  <p>user eveluation</p>
                </CardBody>
              </div>
            </div>

            <div className="col_downloads BookData">
              <h1>{this.state.currentBook.name}</h1>
              <h3>
                <a href={"http://localhost:3000/authors/"+this.state.author._id}>
                  {"By " + this.state.author.firstName + " " +
                    this.state.author.lastName
                  }
                </a>
              </h3>
              <h3>
                <a href={"http://localhost:3000/categories/"+this.state.category._id
                      +"/"+this.state.category.name}>
                  {this.state.category.name + " Category"}
                </a>
              </h3>
              <p>
                <div className="text-center">{this.state.currentBook.rate+"%"}</div>
                <Progress value={this.state.currentBook.rate}/>
              </p>
            </div>
          </div>
        </div>
    );
  }
};

export default Bookprofil;

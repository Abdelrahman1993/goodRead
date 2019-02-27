import React ,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button , CardLink} from 'reactstrap';
import GetAuthors from "../service/author";

class Authors extends Component {

  constructor(props) {
    super(props);
    this.state={
        authors : [],
    };
  }

  componentDidMount(){
    GetAuthors()
    .then(data => {
      this.setState({
          authors: data,
      });
    });
  }

  render() {
    return (
        <div>
          <h1>Authors</h1>
          {this.state.authors.map((author , index) =>
            <div className="thumb" key={index}>
            <Card>
              <img style={{width:200, height:150}}
                   src={"http://localhost:4000/"+author.photo}
                   alt="Card image cap"/>
              <CardBody>
                <CardTitle>
                  <a href={"http://localhost:3000/authors/"+author._id}>
                    {author.firstName + " " + author.lastName}
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

export default Authors;

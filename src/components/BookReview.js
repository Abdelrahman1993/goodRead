import React, {Component} from 'react';
import '../Styles/AdminPanel.css';
import Cookies from 'universal-cookie';
import Review from "../service/addreview";
import GetBooks from "../service/book";


class BookReview extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         reviews: [],
    //         newReview: '',
    //         bookId: this.state.match.params.id,
    //     };
    // }

    componentDidMount(){
        let cookies = new Cookies();
        if (!cookies.get('token')) {
          window.location = "http://localhost:3000/";
        }
        console.log(this.state.match.params)
    // GetBooks().then((data) => {
    //   let author_books = data.filter((book) => {
    //     return book.authorId._id === this.state.authorId;
    //   });
    //   console.log(author_books);
    //   this.setState({
    //     authorBooks: author_books,
    //   });
    // })
  }

    handleUpdateBody = (event) => {
        console.log(event.target.value);
        this.setState({
            body: event.target.value
        });
    }

    handleReview() {
        Review({
            'body': this.state.email,
        }).then(data => {
            if (data.token) {
                let cookies = new Cookies();
                cookies.set('token', data.token, {path: '/'});
                window.location = "http://localhost:3000/";
            } else {
                window.location = "http://localhost:3000/";
            }
        });
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <img src="2.jpg" alt="error" width="45" height="45"/>
                    </div>
                    <input type="text" className="form-control form-control-lg" id="exampleInputPassword1"
                           placeholder="write your review"
                           // value={this.state.body}
                           onChange={this.handleUpdateBody}/>
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary" type="button"
                                onClick={this.handleReview}>
                            Button
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookReview;
import React, {Component} from 'react';
// import '../Styles/AdminPanel.css';
import Cookies from 'universal-cookie';
// import Review from "../service/addreview";
import '../Styles/bookprofile.css';

class BookReviewAlready extends Component {

    constructor(props) {
        super(props);
        this.state = {
            body: '',
        };
    }


    render() {
        return (
            <div className='container-fluid'>
                <div className="input-group mb-3 reviews">
                    <div className="HeaderReview">
                        <h2>Reviews</h2>
                    </div>
                    <div className="input-group-prepend">
                        <img src="2.jpg" alt="error" width="45" height="45"/>
                    </div>
                    <p className="form-control form-control-lg"
                       id="exampleInputPassword1">

                    </p>
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary" type="button">
                            delete
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookReviewAlready;
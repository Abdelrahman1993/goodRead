import React, {Component} from 'react';

import Cookies from 'universal-cookie';
import {Card, CardBody, CardText, Input} from "reactstrap";
// import Review from "../service/addreview";

import '../Styles/authorbook.css';
class AuthorBookProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            body: '',
        };
    }


    render() {
        return (
            <div className=" BookInfo">
                <div className="HeaderBook">
                    <h2>author's books</h2>
                </div>
                <div className="row">
                    <div className="col-md-1 col_trainings authorImg">
                        <Card>
                            <img width="100%" height="150px" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        </Card>
                    </div>
                    {/*<div className="col-md-1 col_downloads"></div>*/}
                    <div className="col-md-8 col_downloads">
                        <h1>book name</h1>
                        <p>avreag eveluation</p>
                    </div>
                    <div className="col-md-2 col_downloads">
                        <Input width="50%" type="select" name="select1" id="exampleSelect">
                            <option>want to read</option>
                            <option>reading</option>
                            <option>read</option>

                        </Input>
                    </div>

                </div>
                <hr />

            </div>
        );
    }
}

export default AuthorBookProfile;
import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Input, FormGroup
} from 'reactstrap';
import '../Styles/bookprofile.css';

const Bookprofil = (props) => {
    return (
        <div className="container-fluid">
            <div className="row BookPage">
                <div className="col_trainings BookImg">
                    <div className="Img">
                        <Card>
                            <img width="100%" height="280px" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        </Card>
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
                    <h1>book name</h1>
                    <h1>by ==============</h1>
                    <h1>cat ==============</h1>
                    <p>avreag eveluation</p>
                    <CardText>
                        Some quick example text to build on the card title
                        and make up the bulk of the card's content.
                    </CardText>
                </div>
            </div>


        </div>
    );
};

export default Bookprofil;

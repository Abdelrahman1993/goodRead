import React from 'react';
import {
    Card, CardText, CardBody
} from 'reactstrap';
import '../Styles/authorbook.css';

const Authorprofil = (props) => {
    return (
        <div className="container-fluid ">
            <div className="row AuthorProfile">
                <div className="col_trainings authorImg">
                    <Card>
                        <img width="100%" height="280px" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    </Card>

                </div>
                {/*<div className="col-md-1 col_downloads"></div>*/}

                <div className="authorInfo col_downloads">
                    <h1>Author name</h1>
                    <h1>by ==============</h1>

                    <CardText>
                        Some quick example text to build on the card title
                        and make up the bulk of the card's content.
                    </CardText>
                </div>
            </div>


        </div>
    );
};

export default Authorprofil;

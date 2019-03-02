import React , {Component} from 'react';
import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

export default class Paginationt extends Component{

    constructor(props) {
        super(props);
        this.state = {
            activePage: 15
        };
        this.handlePageChange=this.handlePageChange.bind(this);
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }

    render() {
        return (
            <div>
                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={450}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                />
            </div>
        );
    }
}
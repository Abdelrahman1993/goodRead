import React , {Component} from 'react';
import {Table} from "reactstrap";
import GetCategories from "../service/category";
import Cookies from "universal-cookie";
import Link from "react-router-dom/es/Link";


class Categories extends Component {

    constructor(props) {
        super(props);
        this.state={
            categories : [],
        };
    }

    componentDidMount(){
      let cookies = new Cookies();
      if (!cookies.get('token')) {
        window.location = "http://localhost:3000/";
      }
      GetCategories()
      .then(data => {
        this.setState({
            categories: data,
        })
      });
    }

    render() {

        return (
            <div style={{textAlign: "center"}}>
              <Table>
                <thead>
                <tr>
                  <th>Category name</th>
                </tr>
                </thead>
              <thead>
              {this.state.categories.map((category , index) =>
                  <tr>
                      <th key={index}>
                        <Link to={"/categories/" + category._id + "/" + category.name}>
                          {category.name}
                        </Link>
                      </th>
                  </tr>)}
              </thead>
            </Table>
        </div>

        );
    }
}
export default Categories;
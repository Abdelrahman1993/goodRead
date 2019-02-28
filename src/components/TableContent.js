import React, {Component} from 'react';
import '../App.css';
import { Table } from 'reactstrap';
import SideBar from "./SideBar";
import StarRating from "./StarRating";

export default class TableContent extends  Component{

    render(){
        return(
<div className="container-fluid">
    <div className="row">
        <div className="col-lg-3">
            <SideBar/>
        </div>
            <div className="col-lg-8"  >
                <Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Cover</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Avg Rate</th>
                        <th>Rating</th>
                        <th>shelve</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td><StarRating /></td>
                        <td><StarRating /></td>
                        <td>
                            <select value='0'>
                                <option>Read</option>
                                <option>Reading</option>
                                <option>want to read</option>
                            </select>

                        </td>
                    </tr>
                    {/*<tr>*/}
                        {/*<th scope="row">2</th>*/}
                        {/*<td>Jacob</td>*/}
                        {/*<td>Thornton</td>*/}
                        {/*<td>@fat</td>*/}
                        {/*<td>Mark</td>*/}
                        {/*<td>Otto</td>*/}
                        {/*<td>@mdo</td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                        {/*<th scope="row">3</th>*/}
                        {/*<td>Larry</td>*/}
                        {/*<td>the Bird</td>*/}
                        {/*<td>@twitter</td>*/}
                        {/*<td>Mark</td>*/}
                        {/*<td>Otto</td>*/}
                        {/*<td>@mdo</td>*/}
                    {/*</tr>*/}
                    </tbody>
                </Table>
            </div>

    </div>

</div>


        )
    }

}
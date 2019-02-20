import React from 'react';

export default function FooterItem(props) {
    return (
        <li>
           <a href={props.url}>{props.value}</a> 
        </li>
    );
}
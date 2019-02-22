
import React from 'react';
import FooterItem from './footerItem';

export default class Footer extends React.Component {

  state = {
    links: [
      {
        id: 1,
        value: "Home",
        url: "#",
      },
      {
        id: 2,
        value: "About us",
        url: "#",
      }, 
      {
        id: 3,
        value: "Categories",
        url: "#",
      },
      {
        id: 4,
        value: "Authors",
        url: "#",
      },
      {
        id: 5,
        value: "Terms & Conditions",
        url: "#",
      },
    ],
  }
  render(){
    return (
      <div>
        <ul>
        {this.state.links.map(link => (
          <FooterItem 
            key={link.id}
            value={link.value}
            url={link.url} 
          />
      ))}
          
        </ul>
      </div>
    );
  }
}
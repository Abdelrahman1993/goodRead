import React from 'react';

export default function Login(props) {
    return (
      <div>
        <form>
          <input type="text" placeholder="enter your username" />
          <i className="fas fa-user"></i>
          <input type="password" placeholder="enter your password" />
          <i className="fas fa-unlock"></i>
          <button type="submit" >Login</button>
        </form>
      </div>
    );
  }
import React from 'react';

export default function Login(props) {
    return (
      <div>
        <form>
          <input type="text" placeholder="enter your username" />
          <input type="password" placeholder="enter your password" />
          <button type="submit" >Login</button>
        </form>
      </div>
    );
  }
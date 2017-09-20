import React, { Component } from 'react';
import './Header.css';
import Title from './Header/Title';

class Header extends Component {
  render() {
    return (

      <header>
      <Title />
      	<nav>
      		<a href="/">Home</a>
      		<a href="/">Customers</a>
      		<a href="/">Projects</a>
      		<div id="search">
      		<input type="text"></input> <i className="fa fa-search"></i>
      		</div>
      	</nav>
      </header>
      
      )
  }
}

export default Header;
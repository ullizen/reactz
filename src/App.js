import React, { Component } from 'react';
import './App.css';
import Footer from './footer';
import Header from './Header';
import Projects from './Projects';

class App extends Component {

  constructor() {
    super();
    this.state = {name: "Ullizen", number: 0};
  }

  

  render() {

    //varför ändrar sig den här??
    var randnum = Math.random();

    var projectz = {
      name: "Project",
      id: "1",
    }

    // setTimeout(() => {
    //   this.setState({name: "SuperUllizen"})
    //   this.state.number = Math.random();
    //   randnum = 100;
    // }, 999);

    return (
      <div className="App">
      <Header />
        <div className="App-header">
          <h2>Wiki leaks_ {randnum} {this.state.name} {projectz.name}</h2>
        </div>
        <p className="App-intro">
          <cite>“WikiLeaks is a giant library of the world’s most persecuted documents. 
          We give asylum to these documents, we analyze them, we promote them and we obtain more.”</cite>
        </p>
        <p>Hej {this.state.number}</p>
        <Projects />
        <Footer />
        <Footer />
        <Footer />
      </div>
    );
  }
}

export default App;

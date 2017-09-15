import React, { Component } from 'react';
import './Projects.css';
import clients from './clients.json';
// import Title from './Header/Title';

class Projects extends Component {
  render() {

  	var projectz = [
  		{
			name: "hasse",
      		id: "1",
  		},
  		{
			name: "Bosse",
      		id: "2",
  		},
      
    ];

    for (var i = 0; i < projectz.length; i++) {
		    console.log( projectz[i].name );
		}
    return (

      <div id="projects">

      	<h1>{projectz[0].name}</h1>
      	<h1>{clients[0].nm}</h1>
      	{projectz.map(projectz => 
      		<div>
      		<h2> {projectz.name} </h2>
      		<p>Id: {projectz.id}</p>
      		</div>
      		)} 

      	{clients.map(clients => 
      		<div>
      		<h2> {clients.nm} </h2>
      		<p>City: {clients.cty}</p>
      		</div>
      		)} 

      	

      </div>
      
      )
  }
}

export default Projects;
import React from "react";
import Links from './Links.js'

function About(props) {
  console.log(props)
  function getBio () {
    if(props.bio === '' || props.bio === undefined) {
      return null
    }else{
      return <p>{props.bio}</p> 
    }
  }

  return (
    <div id="about">
      <h2>About Me</h2>
        {getBio()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github = {props.github} linkedin = {props.linkedin}/>
    </div>
  );
}

export default About;

import React from "react";
import Links from "./Links";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      {Props.bio !== '' && typeof Props.bio!== 'undefined'? <p>{props.bio}</p>:null}
      <p>Put the bio in here</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      
      <Links github={props.github} linkedin={props.linkedin}/>
    </div>
  );
}

export default About;

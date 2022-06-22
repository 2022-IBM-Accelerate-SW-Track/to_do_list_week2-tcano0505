import React, { Component } from "react";
import "./About.css";
import T3 from "../assets/T3.JPG";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={T3}
              alt="Tommy's Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Tommy Cano</div>
            <div className="brief_description">
              Hello Everyone! I am a rising senior at St. John's University in Queens, New York
              I study Computer Science and I am currently interning at Veracode as a Software Engineer.
              One day I dream to land a Software Engineering role at Google, Amazon, or IBM!

              I am a huge music and sports fan. Some of my favortie music artists include Bad Bunny, Kendrick Lamar, Kanye West and Tyler the Creator.
              My favorite sports to play are Soccer and Basketball, I am a huge fan of Lebron James and Liverpool F.C.
              My interest expand into movies as well, some of my favorite movies include Goodfellas, Once Upon a Time in Hollywood, and Star Wars : Revenge of the Sith! 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

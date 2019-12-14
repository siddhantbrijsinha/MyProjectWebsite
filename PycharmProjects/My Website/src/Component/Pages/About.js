import React, { Component } from "react";
import Header from '../Common/Header';
import  image  from "../Assets/image/about.jpg";
import TimeLine from "../Common/Timeline";
import Team from "../Common/Team"

class About extends Component {
  render() {
    return (
      <div>
        <Header
          title="About Me"
          subtitle="It's Gonno Be Nice Story!"
          buttonText="Story is Still going On"
          link="/services"
          showButton={true}
          image={image}
        />
        <TimeLine />
        <Team />
      </div>
    );
  }
}
export default About;

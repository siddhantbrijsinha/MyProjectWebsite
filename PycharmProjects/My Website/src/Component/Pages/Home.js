import React, { Component } from "react";
import Header from '../Common/Header';
import  image  from '../Assets/image/header-bg.jpg';

import Services from '../Common/Services';
import PortFolio from '../Common/Portfolio';
import Timeline from '../Common/Timeline';
import Team from '../Common/Team';

class Home extends Component {
  render() {
    return (
      <div>
       <Header 
        title="Welcome To Siddhant's Studio"
        subtitle = "Nice To Meet You!"
        buttonText= "Tell Me More"
        link ="/services"
        showButton = {true}
        image={image}
        />

        <Services />
        <PortFolio />
        <Timeline />
        <Team />
      </div>
    );
  }
}
export default Home;

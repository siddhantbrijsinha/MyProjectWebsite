import React, { Component } from "react";
import TeamMembers from './TeamMembers';
import img1 from '../Assets/image/team/1.jpg';
import img2 from '../Assets/image/team/2.jpg';
import img3 from '../Assets/image/team/3.jpg';

const teamMembers = [
    {name:'Siddhant Brij Sinha', image: img1, position:'Lead Designer'},
    {name:'Siddhant Brij Sinha', image: img2, position:'Lead Marketer'},
    {name:'Siddhant Brij Sinha', image: img3, position:'Lead Developer'},
]

class Team extends Component {
  render() {
    return (
      <section className="bg-light page-section" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className="row">
            {teamMembers.map((member,index)=>{
               return <TeamMembers {...member} key={index} />
            })}
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                totam corporis ea, alias ut unde.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;

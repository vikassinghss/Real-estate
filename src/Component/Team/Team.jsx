import React from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="mb-3">Property Agents</h1>
          <p>
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
            lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum
            vero dolor duo.
          </p>
        </div>
        <div className="row g-4">
          <TeamCard img = "assets/img/team-1.jpg"
          name = {"Rooma"}
          destination = {"Destination"}
          
          />
          <TeamCard img = "assets/img/team-2.jpg"
          name = {"Rahul Singh"}
          destination = {"Destination"}
          
          />
          
          <TeamCard img = "assets/img/team-3.jpg"
          name = {"Diksha"}
          destination = {"Destination"}
          
          />
          <TeamCard img = "assets/img/team-4.jpg" 
          name = {"Vishal Singh"}
          destination = {"Destination"}
          
          />
        </div>
      </div>
    </div>
  );
};

export default Team;

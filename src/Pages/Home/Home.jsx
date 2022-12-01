import React from "react";
import Call from "../../Component/CallAction/Call";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import PropertyList from "../../Component/PropertyListing/PropertyList";
import Property from "../../Component/PropertyType/Property";
import Team from "../../Component/Team/Team";
import FindProperty from "../About/FindProperty";
import Carousel from "../Testimonial/Carousel";


const Home = () => {
  return (
    <div>
      <Header />
      <Property />
      <FindProperty />
      <PropertyList />
      <Call />
      <Team />
     <Carousel/>
      <Footer />
    </div>
  );
};

export default Home;

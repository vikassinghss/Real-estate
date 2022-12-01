import React from "react";
import PropertyList from "../PropertyListing/PropertyList";
import Serviceheader from "./Serviceheader";
import Footer from '../Footer/Footer'


const ServicePage = () => {
  return (
    <div>
      <Serviceheader/>
      <PropertyList/>
      <Footer/>
    
    </div>
  );
};

export default ServicePage;

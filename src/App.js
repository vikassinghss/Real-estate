import React from "react";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Propertylist from "./Pages/Property/PropertyListPage/Propertylist";
import Typepage from "./Pages/Property/PropertyTypePage/Typepage";
import Agent from "./Pages/Property/PropertyAgent/Agent";
import TestimonialPage from "./Pages/Testimonial/TestimonialPage";
import Contact from "./Pages/Contact/Contact";
import ServicePage from "./Component/Services/ServicePage";
import Single from "./Component/Services/SingleType/Single";
import Navbar from "./Component/Navbar/Navbar";
import OnTop from "./Functions/OnTop";

function App() {
  return (
    <div>
      <Router>
        <OnTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/propertylist" element={<Propertylist />}></Route>
          <Route path="/typepage" element={<Typepage />}></Route>
          <Route path="/agent" element={<Agent />}></Route>
          <Route path="/testimonial" element={<TestimonialPage />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/service" element={<ServicePage />}></Route>
          <Route path="/single/:id" element={<Single />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

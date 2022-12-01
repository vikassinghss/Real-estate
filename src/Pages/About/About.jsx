import React from 'react'
import Call from '../../Component/CallAction/Call'
import Footer from '../../Component/Footer/Footer'
// import Search from '../../Component/Search/Search'
import Team from '../../Component/Team/Team'
import AboutHeader from './AboutHeader'
import FindProperty from './FindProperty'

const About = () => {
  return (
    <div>
  
        <AboutHeader/>
        {/* <Search/> */}
        <FindProperty/>
        <Call/>
        <Team/>
        <Footer/>
      
    </div>
  )
}

export default About

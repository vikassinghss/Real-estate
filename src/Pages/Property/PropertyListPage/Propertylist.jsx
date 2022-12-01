import React from 'react'
import Call from '../../../Component/CallAction/Call'
import Footer from '../../../Component/Footer/Footer'
import PropertyList from '../../../Component/PropertyListing/PropertyList'
// import Search from '../../../Component/Search/Search'
import PropertyHeader from './PropertyHeader'

const Propertylist = () => {
  return (
    <div>
        <PropertyHeader/>
        {/* <Search/> */}
        <PropertyList/>
        <Call/>
        <Footer/>
      
    </div>
  )
}

export default Propertylist

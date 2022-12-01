import React from 'react'
import { Link } from 'react-router-dom'

const TeamCard = (props) => {
  return (
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="team-item rounded overflow-hidden">
                    <div className="position-relative">
                        <img className="img-fluid" src={props.img} alt=""/>
                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                            <Link className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></Link>
                            <Link className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                    <div className="text-center p-4 mt-3">
                        <h5 className="fw-bold mb-0">{props.name}</h5>
                        <small>{props.destination}</small>
                    </div>
                </div>
            </div>
  )
}

export default TeamCard

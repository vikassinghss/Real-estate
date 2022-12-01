import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Pdata } from "./Pdata";

const PropertyList = () => {
  const [data, setdata] = useState([]);
  const [searchinput, setinput] = useState("");
  const [fdata, setfdata] = useState(data);

  useEffect(() => {
    let apiData = async () => {
      let url = await axios.get("http://localhost:3006/List");
      let res = await url.data;
      setdata(res);
      setfdata(res);
    };
    apiData();
  }, []);

  const search = (e) => {
    let value = e.target.value;
    setinput(value);
  };

  // filter on button function

  const filterout = (category) => {
    const filterdata = data.filter((val) => {
      return category === val.for;
    });
    setfdata(filterdata);
  };
  // function select type

  const handleselect = (e) => {
    const typeF = e.target.value;
    const typeFilter = data.filter((val) => {
      return val.type === typeF;
    });
    setfdata(typeFilter);
  };

  // function Location type

  const locationChange = (e) => {
    const selectLocation = e.target.value;
    const setlocation = data.filter((val) => {
      return val.location === selectLocation;
    });
    setfdata(setlocation);
  };

  return (
    <div>
      {/* Search bar  */}

      <div
        className="container-fluid bg-primary mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ padding: "35px" }}
      >
        <div className="container">
          <form>
            <div className="row g-2">
              <div className="col-md-10">
                <div className="row g-2">
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control border-0 py-3"
                      placeholder="Search Keyword"
                      onChange={search}
                    />
                  </div>
                  <div className="col-md-4">
                    <select
                      className="form-select border-0 py-3"
                      onChange={handleselect}
                    >
                      <option>Select Property</option>

                      {data.map((val) => {
                        return <option key={val.id}>{val.type}</option>;
                      })}
                    </select>
                  </div>
                  <div className="col-md-4">
                    <select
                      className="form-select border-0 py-3"
                      onChange={locationChange}
                    >
                      <option>Select Location</option>
                      {data.map((val) => {
                        return <option key={val.id}>{val.location}</option>;
                      })}
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-md-2">
                <button className="btn btn-dark border-0 w-100 py-3">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* search bar end  */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-0 gx-5 align-items-end">
            <div className="col-lg-6">
              <div
                className="text-start mx-auto mb-5 wow slideInLeft"
                data-wow-delay="0.1s"
              >
                <h1 className="mb-3">Property Listing</h1>
                <p>
                  Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
                  dolore lorem kasd vero ipsum sit eirmod sit diam justo sed
                  rebum.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 text-start text-lg-end wow slideInRight"
              data-wow-delay="0.1s"
            >
              <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                <li className="nav-item me-2">
                  <button
                    className="btn btn-outline-primary active"
                    data-bs-toggle="pill"
                    onClick={() => setfdata(data)}
                  >
                    Featured
                  </button>
                </li>
                <li className="nav-item me-2">
                  <button
                    onClick={() => filterout("For Sell")}
                    className="btn btn-outline-primary"
                    data-bs-toggle="pill"
                  >
                    For Sell
                  </button>
                </li>
                <li className="nav-item me-0">
                  <button
                    className="btn btn-outline-primary"
                    data-bs-toggle="pill"
                    onClick={() => filterout("For Rent")}
                  >
                    For Rent
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                {fdata.filter((val) => {
                    if (searchinput === "") {
                      return val;
                    } else if (
                      val.name.toLowerCase().includes(searchinput.toLowerCase())
                    ) {
                      return val;
                    } else if (
                      val.location
                        .replace(/[, ]+/g, " ")
                        .replace(/\s/g, "")
                        .toLowerCase()
                        .includes(searchinput.toLowerCase().replace(/\s/g, ""))
                    ) {
                      return val;
                    }
                    return null
                  })
                  .map((val) => {
                    return ( <div
                        className="col-lg-4 col-md-6 wow fadeInUp"
                        data-wow-delay="0.1s"
                        key= {val.id}
                        
                      
                      >
                        <div className="property-item rounded overflow-hidden" >
                          <div className="position-relative overflow-hidden" >
                            <Link to="">
                              <img
                                className="img-fluid"
                                src={`assets/img/${val.img}`}
                                alt=""
                                
                              />
                            </Link>
                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                              {val.for}
                            </div>
                            <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                              {val.type}
                            </div>
                          </div>
                          <div className="p-4 pb-0">
                            <h5 className="text-primary mb-3">{val.price}</h5>
                            <Link
                              to={`/Single/${val.id}`}
                              className="d-block h5 mb-2"
                              href=""
                            >
                              {val.name}
                            </Link>
                            <p>
                              <i className="fa fa-map-marker-alt text-primary me-2"></i>
                              {val.location}
                            </p>
                          </div>
                          <div className="d-flex border-top">
                            <Pdata size={val.size}></Pdata>
                            <Pdata size={val.bed}></Pdata>
                            <Pdata size={val.bath}></Pdata>
                            {/* <small className="flex-fill text-center border-end py-2">
                              <i className="fa fa-bed text-primary me-2"></i>
                              {val.bed}
                            </small>
                            <small className="flex-fill text-center py-2">
                              <i className="fa fa-bath text-primary me-2"></i>
                              {val.bath}
                            </small> */}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                <div
                  className="col-12 text-center wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <Link
                    to="/Service"
                    className="btn btn-primary py-3 px-5"
                    href=""
                  >
                    Browse More Property
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;

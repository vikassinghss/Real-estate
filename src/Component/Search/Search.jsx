import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [data, setdata] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    let apiData = async () => {
      let url = await axios.get("http://localhost:3006/List");
      let res = await url.data;

      setdata(res);
    };
    apiData();
  }, []);

  console.log("");

  const inputValue = (e) => {
    console.log(e.target.value);
    const clickResult = e.target.value;
    setSearchInput(clickResult);
    // UpdateUserName(data);

    // if (searchInput !== "") {
    //   data.map((ele) => {
    //     if (ele.name.toLowerCase().includes(searchInput.toLowerCase())) {
    //       console.log('checking...', ele)
    //     }
    //   });
    // }
    // searchRoom(searchInput);
  };

  return (
    <div>
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
                      onChange={inputValue}
                    />
                  </div>
                  <div className="col-md-4">
                    <select className="form-select border-0 py-3">
                      <option selected>Property Type</option>
                      <option >Property Type 1</option>
                      <option >Property Type 2</option>
                      <option >Property Type 3</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <select className="form-select border-0 py-3">
                      <option selected>Location</option>
                      <option>Location 1</option>
                      <option>Location 2</option>
                      <option >Location 3</option>
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
    </div>
  );
};

export default Search;

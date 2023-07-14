import React, { useEffect, useRef, useState } from "react";
import "./searchForm.css";
import DataTileList from "../DataTileList/dataTileList";

const SearchForm = () => {
  const sfStatus = useRef();
  const sfReuse = useRef();
  const sfType = useRef();
  const [status, setStatus] = useState("noSelect");
  const [reuse, setReuse] = useState("noSelect");
  const [type, setType] = useState("noSelect");
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // fetching default data from api
  const fetchData = async (url = "https://api.spacexdata.com/v3/capsules") => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setApiData(jsonData);
  };

  // getting form data
  const getUserData = () => {
    setStatus(sfStatus.current.value);
    setReuse(sfReuse.current.value);
    setType(sfType.current.value);
  };

  // get requested data from api using the user selected fields in the form
  const displayResults = async () => {
    getUserData();
    const url = `https://api.spacexdata.com/v3/capsules?reuse_count=${reuse}&type=${type}&status=${status}`;
    console.log(url);
    await fetchData(url);
  };

  return (
    <>
      {/* Container */}
      <div className="searchForm">
        {/* title */}
        <div className="sfTitle">Search Form</div>
        <div className="sfFilterContainer">
          {/* Drop down menu */}
          <div className="sfFilter">
            <span>Capsule Status</span>
            <select name="status" ref={sfStatus}>
              <option value="">No Select</option>
              <option value="active">Active</option>
              <option value="destroyed">Destroyed</option>
              <option value="retired">Retired</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>

          {/* Drop down menu */}
          <div className="sfFilter">
            <span>Capsule Reuse Count</span>
            <select name="reuse" ref={sfReuse}>
              <option value="">No Select</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>

          {/* Drop down menu */}
          <div className="sfFilter">
            <span>Capsule Type</span>
            <select name="type" ref={sfType}>
              <option value="">No Select</option>
              <option value="Dragon 1.0">Dragon 1.0</option>
              <option value="Dragon 1.1">Dragon 1.1</option>
              <option value="Dragon 2.0">Dragon 2.0</option>
            </select>
          </div>

          {/* Search button */}
          <button className="sfButton" type="button" onClick={displayResults}>
            Search
          </button>
        </div>
      </div>

      {/* Tile list containing all the tiles with capsule data */}
      <div className="dataTileContainer">
        {apiData ? (
          <DataTileList data={apiData} />
        ) : (
          <div className="noData">No Data Found</div>
        )}
      </div>
    </>
  );
};

export default SearchForm;

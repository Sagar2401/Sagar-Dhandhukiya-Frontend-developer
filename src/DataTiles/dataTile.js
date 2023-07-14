import React, { useState } from "react";
import "./dataTile.css";

const DataTile = ({ show, data, setCurrentData, setShow }) => {
  // details box show-noshow
  const showLightbox = () => {
    setCurrentData(data);
    setShow(!show);
  };

  // details box definition

  return (
    <>
      {/* Rendering single tile component */}
      <div className="tile" onClick={showLightbox}>
        <p className="tHeading">{data.type}</p>
        <div className="tbody">
          <p className="tDate">
            <span>
              <strong>Launch Date:</strong>
            </span>{" "}
            {data.original_launch
              ? data.original_launch.substring(0, 10)
              : "unknown"}
          </p>
          <p className="tStatus">
            <strong>Status:</strong> <span>{data.status}</span>
          </p>
          <p className="tStatus">
            <strong>Reuse Count:</strong> {data.reuse_count}
          </p>
        </div>
      </div>
    </>
  );
};

export default DataTile;

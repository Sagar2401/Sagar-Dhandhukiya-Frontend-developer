import React, { useState } from "react";
import DataTile from "../DataTiles/dataTile";
import "./dataTileList.css";
import Lightbox from "../DataTiles/Datamodale";

const DataTileList = ({ data }) => {
  const [show, setShow] = useState(false);
  const [currentData, setCurrentData] = useState({});

  return (
    <>
      {/* Tile list container */}
      <div className="tileList">
        {data.map((capsule, index) => (
          <DataTile
            key={index}
            data={capsule}
            setCurrentData={setCurrentData}
            setShow={setShow}
            show={show}
          />
        ))}
      </div>
      {show && <Lightbox data={currentData} onclose={() => setShow(false)} />}
    </>
  );
};

export default DataTileList;

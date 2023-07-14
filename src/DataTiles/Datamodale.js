import React from "react";

const Lightbox = ({ data, onclose }) => {
  return (
    <div class="modal" id="modal-one" aria-hidden="true">
      {" "}
      <div class="modal-dialog">
        {" "}
        <div class="modal-header">
          <h2>{data.type}</h2>
          <span className="btn-close" onClick={onclose}>
            x
          </span>
        </div>
        <div className="modal-body">
          <p className="tStatus">
            <strong>Details:</strong>{" "}
            {data.details ? data.details : "No Details Available"}
          </p>
          <p className="tStatus">
            <strong>Capsule Serial:</strong> {data.capsule_serial}
          </p>
          <p className="tStatus">
            <strong>Capsule Id:</strong> {data.capsule_id}
          </p>
          <p className="tStatus">
            <strong>Landings:</strong> {data.landings}
          </p>
          <p className="tStatus">
            <strong>Status:</strong> {data.status}
          </p>
          <p className="tStatus">
            <strong>Reuse Count:</strong> {data.reuse_count}
          </p>
          <p className="tStatus">
            <strong>launch Date:</strong>{" "}
            {new Date(data.original_launch).toDateString()}
          </p>
          <p className="tStatus">
            <strong>Missions:</strong>{" "}
            {data.missions.map((mission, index) => (
              <>
                <p>Name:{mission.name}</p>
                <p>Flight:{mission.flight}</p>
                {index < data.missions.length - 1 ? <hr /> : null}
              </>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Lightbox;

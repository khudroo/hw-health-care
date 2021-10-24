import React from "react";
import { useParams } from "react-router";
import useServices from "../../../hooks/useServices";
import "./ServiceDetails.css";

function ServiceDetails() {
  const { id } = useParams();
  const [services] = useServices();
  const matchedItem = services?.find((service) => service.id === id);


  return (
    <div className="mt-4" id="service-details">
      <div className="container">
        <div className="row w-50 mx-auto">
          <div className="col-md-12">
            <div>
              <img className="img-fluid" src={matchedItem?.image} alt="img" />
            </div>
            <h1 className="mt-4">{matchedItem?.title}</h1>
            <h4>{matchedItem?.shortDes}</h4>
            <p>{matchedItem?.detailDes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;

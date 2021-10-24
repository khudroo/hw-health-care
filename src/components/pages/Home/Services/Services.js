import React from "react";
import { Link } from "react-router-dom";
import useServices from "../../../../hooks/useServices";
import "./Services.css";

const Services = () => {
  const [services] = useServices();

  // console.log(services);

  return (
    <div className="mt-4" id="services">
      <div className="container">
        <h2 className="text-center fw-bolder mb-4">
          Our <span className="text-primary">Services</span>
        </h2>
        <div className="row g-4">
          {services?.map((service) => (
            <div className="col-md-4" key={service.id}>
              <div className="service-wrapper">
                <div className="single-service border p-3 rounded-3">
                  <div>
                    <img className="img-fluid" src={service.image} alt="service img" />
                  </div>
                  <h4 className="mt-4">{service.title}</h4>
                  <p>{service.shortDes}</p>

                  <Link to={`/service/${service.id}`}>
                    <button className="btn btn-outline-primary">Learn More</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

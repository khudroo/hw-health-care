import React from "react";
import "./Review.css";

const Review = () => {
  return (
    <div id="review">
      <div className="container">
        <h1 className="text-center my-5">
          What Our <span className="text-primary">Clint</span> Say
        </h1>
        <p className="text-center w-50 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores at explicabo numquam a
          maiores
        </p>
        <div className="row w-50 mx-auto gy-4">
          <div className="col-md-12">
            <div className="clint-wrapper border">
              <div className="single-clint  p-2">
                <div className="w-50 mx-auto">
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    alt="profile img"
                  />
                </div>
                
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla voluptate deleniti dolorem ullam
                  nihil. Perferendis eum ratione fugiat sapiente facilis a minus reprehenderit tempora nemo,
                  debitis non harum nostrum deleniti aspernatur consequatur suscipit atque voluptas magnam illum
                  natus, rem minima officia? Vero exercitationem blanditiis sint iste. Est veniam ratione harum?
                </p>
                <h5 className="text-end p-2"><span>---</span> Raihan Hossain</h5>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="clint-wrapper border">
              <div className="single-clint p-2">
                <div className="w-50 mx-auto">
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
                    alt="profile img"
                  />
                </div>
                
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla voluptate deleniti dolorem ullam
                  nihil. Perferendis eum ratione fugiat sapiente facilis a minus reprehenderit tempora nemo,
                  debitis non harum nostrum deleniti aspernatur consequatur suscipit atque voluptas magnam illum
                  natus, rem minima officia? Vero exercitationem blanditiis sint iste. Est veniam ratione harum?
                </p>
                <h5 className="text-end p-2"><span>---</span>Jasmin Mahmuda</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

import React from "react";
import "./About.css";

function About() {
  const profileData = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=876&q=80",
      name: "Dr. Susmita ",
      expert: "Medicine Specialist",
      contact: "+0123123123",
    },
    {
      id: 2,
      img: " https://images.unsplash.com/photo-1618498082410-b4aa22193b38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
      name: "Dr. Wiliam",
      expert: "Orthopedic Specialist",
      contact: "+0234523456",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Dr. Humberto Chavezrn",
      expert: "Anesthesiologists",
      contact: "+0345634567",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
      name: "Dr. Usman Yousaf",
      expert: "Cardiologists",
      contact: "+04567845678",
    },
  ];

  return (
    <div id="about-area">
      <div className="container">
        <h1 className="text-center my-4">
          Our <span className="text-primary">Doctors</span>
        </h1>

        <div className="row w-75 mx-auto g-4">
          {profileData?.map((profile) => (
            <div className="col-md-6" key={profile.id}>
              <div className="about-wrapper">
                <div className="single-about p-3 border rounded-3">
                  <div>
                    <img className="img-fluid" src={profile.img} alt="img" />
                  </div>
                  <h5 className="mt-3">{profile.name}</h5>
                  <h3>{profile.expert}</h3>
                  <p>contact: {profile.contact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;

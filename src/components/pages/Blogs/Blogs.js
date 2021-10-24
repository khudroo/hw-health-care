import React from "react";
import "./Blogs.css";

function Blogs() {
  return (
    <div className="mt-5">
      <div className="container">
        <h1 className="text-center">
          {" "}
          Our <span className="text-primary">Blogs</span>
        </h1>
        <p className="text-center w-50 mx-auto pb-5">
        A hospital is a health care institution providing patient treatment with specialized medical and nursing staff and medical equipment.
        </p>
        <div className="row w-50 mx-auto gy-5">
          <div className="col-md-12">
            <h4>Changing Lifestyle habits to keep your heart healthy</h4>
            <p>
              Cardiovascular diseases are one of the most common ailments among people and is the leading cause of
              death in and around the world, as per the World Health Organization (WHO). While older people are
              more prone to heart conditions, in recent times, there has been a surge in heart attack, cardiac
              arrest cases among youngsters.
            </p>

            <div>
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1562585398-fbf461aec9a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1194&q=80"
                alt="img"
              />
            </div>
            <p>
              Many experts and several studies have held unhealthy lifestyle habits responsible for this sudden
              rise in the number of young patients. That said, making the right choices, following a proper diet
              and resorting to healthy behaviours is what will keep your heart healthy in the long run. Therefore,
              here are some lifestyle changes you must adopt if you want to keep cardiovascular disease at bay.
            </p>
            <button className="btn btn-outline-primary">Read More</button>
          </div>

          <div className="col-md-12">
            <h4>Everyday Keep a check on your blood pressure and cholesterol levels</h4>
            <p>
              It is extremely crucial that you manage your blood pressure and cholesterol levels for the healthy
              functioning of the heart. Hypertension and high cholesterol levels can increase your risk of heart
              ailments, including a stroke, heart attack and more.
            </p>

            <div>
              <img
                className="img-fluid"
                src="https://media.istockphoto.com/photos/female-doctor-arms-make-medic-procedure-closeup-picture-id1089976414?b=1&k=20&m=1089976414&s=170667a&w=0&h=z3MTW8k043P_EadaqD6jQlR9e-oPfaP1f4ICqpGqsng="
                alt="img"
              />
            </div>
            <p>
              While both high blood pressure and high cholesterol do not have any particular tell-tale signs,
              leaving it untreated can cause many complications in the long run. This is why early diagnosis can
              help prevent further complications. Blood pressure can be tested at a clinic or at home with the help
              of blood pressure monitors, whereas you can get your cholesterol checked through a blood test.
            </p>
            <button className="btn btn-outline-primary">Read More</button>
          </div>

          <div className="col-md-12">
            <h4>Avoid leading a sedentary lifestyle and exercise</h4>
            <p>
              Being physically inactive ad lazing around can increase your risk of heart diseases. As per a study
              published in the Annals of Internal Medicine, it was found that sitting for long periods of time was
              linked to chronic health conditions including heart disease, Type 2 diabetes and cancer. Therefore,
              it is time to alter the ways and start exercising regularly. You can always start slow. Do not go all
              in, rather gradually increase your hours of exercise, focusing more on consistency.
            </p>

            <div>
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1486739985386-d4fae04ca6f7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlmZXN0eWxlJTIwZXhlcmNpc2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="img"
              />
            </div>
            <p>
              Many experts and several studies have held unhealthy lifestyle habits responsible for this sudden
              rise in the number of young patients. That said, making the right choices, following a proper diet
              and resorting to healthy behaviours is what will keep your heart healthy in the long run. Therefore,
              here are some lifestyle changes you must adopt if you want to keep cardiovascular disease at bay.
            </p>
            <button className="btn btn-outline-primary">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;

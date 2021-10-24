import React from "react";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation, useHistory } from "react-router-dom";

function Login() {
  const { signInUsingGoogle, handleForm, handleEmail, handlePassword } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const redirectUri = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirectUri);
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row w-50 mx-auto">
          <div className="col-md-12">
            <div className="p-3 custom-border mt-3">
              <form onSubmit={handleForm}>
                <h3 className="text-dark text-center custom-m">Login</h3>

                <div className="mb-3">
                  <input
                    onBlur={handleEmail}
                    type="email"
                    className="form-control"
                    placeholder="Username or Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input onBlur={handlePassword} type="password" className="form-control" placeholder="Password" required/>
                </div>

                <button type="submit" className="btn btn-primary form-control">
                  Login
                </button>
              </form>
              <br />

              <p className="text-dark text-center">
                Don't have an account? <Link to="/register">Create an account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center">
              <br />
              <p className="text-dark">-------------------- OR --------------------</p>
              <button onClick={() => handleGoogleLogin()} className="btn btn-primary">
                <FontAwesomeIcon icon={faGoogle} className="fs-5" id="custom-fa" /> Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

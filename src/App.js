import "./App.css";
import NavMenu from "./components/shared/NavMenu/NavMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home/Home";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import About from "./components/pages/About/About";
import Blogs from "./components/pages/Blogs/Blogs";
import PrivateRoute from "./private/PrivateRoute";
import AuthProvider from "./context/AuthProvider";
import Review from "./components/pages/Review/Review";
import NotFound from "./components/pages/NotFound/NotFound";
import Footer from "./components/shared/Footer/Footer";
import ServiceDetails from "./components/pages/ServiceDetails/ServiceDetails";

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Router>
          <NavMenu></NavMenu>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/about">
              <About></About>
            </Route>

            <Route exact path="/blogs">
              <Blogs></Blogs>
            </Route>

            <PrivateRoute exact path="/review">
              <Review></Review>
            </PrivateRoute>

            <Route exact path="/login">
              <Login></Login>
            </Route>

            <Route exact path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute exact path="/service/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

import { BrowserRouter, Route } from "react-router-dom";

import "./App.scss";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Judges from "./pages/Judges/Judges";
import Pravila from "./pages/Pravila/Pravila";
import Finalists from "./pages/Finalists/Finalists";
import Profile from "./pages/Profile/Profile";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
/*
import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";
*/
import Signout from "./components/auth/Signout";

import SubmissionAdd from "./components/submissions/SubmissionAdd/SubmissionAdd";
import SubmissionEdit from "./components/submissions/SubmissionEdit/SubmissionEdit";
import SubmissionDetails from "./components/submissions/SubmissionDetails/SubmissionDetails";

import logo from "./images/logo.png";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <div className="page-left">
          <img src={logo} alt="Logo" />
          <span className="slogan1">
            Конкурс за
            <br />
            Детска
            <br />
            <b>Рисунка</b>
          </span>
          <span className="slogan2"> Конкурс за Детска Рисунка</span>
        </div>

        <BrowserRouter>
          <div className="page-right">
            <Header />
          </div>
          <Route path="/" exact component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/judges" component={Judges} />
          <Route path="/pravila" component={Pravila} />
          <Route path="/finalists" component={Finalists} />
          <Route
            path="/Login"
            render={(props) => <Login {...props} redirectTo="/gallery" />}
          />
          <Route
            path="/register"
            render={(props) => <Register {...props} redirectTo="/gallery" />}
          />
          <Route path="/signout" component={Signout} />
          <Route path="/drawing/:submissionId" component={SubmissionDetails} />

          <Route path="/profile" component={Profile} />

          <Route path="/submit-drawing" component={SubmissionAdd} />
          <Route
            path="/edit-drawing/:submissionId"
            component={SubmissionEdit}
          />
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;

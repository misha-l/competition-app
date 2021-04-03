import { BrowserRouter, Route } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/pages/Home/Home";
import Gallery from "./components/pages/Gallery/Gallery";
import Judges from "./components/pages/Judges/Judges";
import Pravila from "./components/pages/Pravila/Pravila";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import Finalists from "./components/pages/Finalists/Finalists";
import Profile from "./components/pages/Profile/Profile";

import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";
import Signout from "./components/auth/Signout";
import Restricted from "./components/pages/Restricted";
import DrawingSubmit from "./components/pages/DrawingSubmit/DrawingSubmit";
import DrawingEdit from "./components/pages/DrawingEdit/DrawingEdit";
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
          <Route path="/register" component={Register} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/signout" component={Signout} />
          <Route
            path="/restricted"
            render={(props) => <Restricted {...props} />}
          />
          <Route
            path="/drawing/:submissionId"
            render={(props) => <SubmissionDetails {...props} />}
          />

          <Route path="/profile" component={Profile} />

          <Route path="/submit-drawing" component={DrawingSubmit} />
          <Route path="/edit-drawing/:submissionId" component={DrawingEdit} />
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;

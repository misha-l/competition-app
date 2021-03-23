import { BrowserRouter, Route } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/pages/Home/Home";
import Gallery from "./components/pages/Gallery/Gallery";
import Judges from "./components/pages/Judges/Judges";
import Pravila from "./components/pages/Pravila/Pravila";
import Finalists from "./components/pages/Finalists/Finalists";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";

import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";
import Signout from "./components/auth/Signout";
import Restricted from "./components/pages/Restricted";
import Drawingpage from "./components/pages/Drawingpage/Drawingpage";


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
          <Route path="/Gallery" component={Gallery} />
          <Route path="/Judges" component={Judges} />
          <Route path="/Pravila" component={Pravila} />
          <Route path="/Finalists" component={Finalists} />
          <Route path="/Login" component={Login} testProp="fromroute" />
          <Route path="/Register" component={Register} />
          

          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/signout" component={Signout} />

          <Route path="/restricted" component={Restricted} />
          <Route path="/drawingpage" component={Drawingpage} />

        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;

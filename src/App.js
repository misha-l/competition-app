import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Demo from "./components/Demo/Demo";
import Gallery from "./components/pages/Gallery/Gallery";
import Judges from "./components/pages/Judges/Judges";
import Page2 from "./components/pages/Page2/Page2";
import Home from "./components/pages/Home/Home";
import { BrowserRouter, Route } from "react-router-dom";
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

        <div className="page-right">
          <Header />
        </div>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/Gallery" component={Gallery} />
          <Route path="/Judges" component={Judges} />
          <Route path="/page2" component={Page2} />
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;

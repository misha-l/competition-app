import React from "react";
import "./Drawingpage.scss";
import Pagecontainer from "../../Pagecontainer/Pagecontainer";
import { IoLocationSharp } from "react-icons/io5";
import { HiHeart } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import { ImFacebook } from "react-icons/im";

const Drawingpage = () => {
  return (
    <Pagecontainer>
      <div className="drawing-container">
        <div className="drawing-container__main">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/pic5.jpg`}
              alt="Рисунка"
            />
          </div>
          <div className="drawing-container__main--like-delete">
            <div>
              <i>3</i>
              <b>
                <HiOutlineHeart />
              </b>
              <a href="/todo">ХАРЕСАЙ</a>
            </div>
            <span>
              <a href="/todo">ИЗТРИЙ</a>
            </span>
          </div>
        </div>
        <div className="drawing-container__info">
          <h2>Виктор Славчев</h2>
          <h3 className="h3red">на 6 години</h3>
          <h3>
            <IoLocationSharp />
            &nbsp;Годеч
          </h3>
          <p>Ламята Ема изпитва различни чувства едновременно...</p>
          <a href="/todo" className="edit-button">
            РЕДАКТИРАЙ
          </a>
          <a href="/todo" className="share-f">
            СПОДЕЛИ <ImFacebook />
          </a>
        </div>
      </div>
    </Pagecontainer>
  );
};

export default Drawingpage;

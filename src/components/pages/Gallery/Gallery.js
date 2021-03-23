import React from "react";
import "./Gallery.scss";
import Pagination from "../../Pagination/Pagination";
import SearchBar from "../../SearchBar/SearchBar";
import Pagecontainer from "../../Pagecontainer/Pagecontainer";

const Gallery = () => {
  return (
    <Pagecontainer>
      <div class="gallery">
        <SearchBar />
        <br />
        <br />
        <Pagination />
        <br />
        <div className="gallery-item">
          <div className="gallery-item__pic">
            <a href="/todo">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/pic1.jpeg`}
                alt="Рисунка"
              />
            </a>
          </div>
          <div className="gallery-item__info">
            <div className="gallery-item__info-author">
              <a href="/todo">Асиа Кълч</a>
            </div>
            <div className="gallery-item__info-likes">
              <a href="/todo">
                3 <b>&#10084;</b>
              </a>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <div className="gallery-item__pic">
            <a href="/todo">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/pic3.jpg`}
                alt="Рисунка"
              />
            </a>
          </div>
          <div className="gallery-item__info">
            <div className="gallery-item__info-author">
              <a href="/todo">Асиа Кълч</a>
            </div>
            <div className="gallery-item__info-likes">
              <a href="/todo">
                3 <b>&#10084;</b>
              </a>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <div className="gallery-item__pic">
            <a href="/todo">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/pic4.jpg`}
                alt="Рисунка"
              />
            </a>
          </div>
          <div className="gallery-item__info">
            <div className="gallery-item__info-author">
              <a href="/todo">Асиа Кълч</a>
            </div>
            <div className="gallery-item__info-likes">
              <a href="/todo">
                3 <b>&#10084;</b>
              </a>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <div className="gallery-item__pic">
            <a href="/todo">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/pic5.jpg`}
                alt="Рисунка"
              />
            </a>
          </div>
          <div className="gallery-item__info">
            <div className="gallery-item__info-author">
              <a href="/todo">Асиа Кълч</a>
            </div>
            <div className="gallery-item__info-likes">
              <a href="/todo">
                3 <b>&#10084;</b>
              </a>
            </div>
          </div>
        </div>

        <br />
        <Pagination />
        <br />
      </div>
    </Pagecontainer>
  );
};

export default Gallery;

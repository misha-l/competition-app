import React from "react";
import "./Gallery.scss";
import Pagination from "../../Pagination/Pagination";
import SearchBar from "../../SearchBar/SearchBar";

const Gallery = () => {
  return (
    <div class="gallery">
        <SearchBar />
        <br />
        <br />
        <Pagination />
        <br />
      <div className="gallery-item">
        <div className="gallery-item__pic">
          <img src={`${process.env.PUBLIC_URL}/assets/images/pic1.jpeg`} />
        </div>
        <div className="gallery-item__info">
        <div className="gallery-item__info-author">
          <a href="#">Асиа Кълч</a>
        </div>
        <div className="gallery-item__info-likes">
          <a href="#">3 <b>&#10084;</b></a>
        </div>
        </div>
      </div>

            <div className="gallery-item">
        <div className="gallery-item__pic">
          <img src={`${process.env.PUBLIC_URL}/assets/images/pic3.jpg`} />
        </div>
        <div className="gallery-item__info">
        <div className="gallery-item__info-author">
          <a href="#">Асиа Кълч</a>
        </div>
        <div className="gallery-item__info-likes">
          <a href="#">3 <b>&#10084;</b></a>
        </div>
        </div>
      </div>

      <div className="gallery-item">
        <div className="gallery-item__pic">
          <img src={`${process.env.PUBLIC_URL}/assets/images/pic4.jpg`} />
        </div>
        <div className="gallery-item__info">
        <div className="gallery-item__info-author">
          <a href="#">Асиа Кълч</a>
        </div>
        <div className="gallery-item__info-likes">
          <a href="#">3 <b>&#10084;</b></a>
        </div>
        </div>
      </div>

            <div className="gallery-item">
        <div className="gallery-item__pic">
          <img src={`${process.env.PUBLIC_URL}/assets/images/pic5.jpg`} />
        </div>
        <div className="gallery-item__info">
        <div className="gallery-item__info-author">
          <a href="#">Асиа Кълч</a>
        </div>
        <div className="gallery-item__info-likes">
          <a href="#">3 <b>&#10084;</b></a>
        </div>
        </div>
      </div>


              <br />
        <Pagination />
        <br />
    </div>
  );
};

export default Gallery;

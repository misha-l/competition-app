import React from "react";
import "./Pagination.scss";

const Pagination = () => {
  return (
    <div className="pagination">
      <a href="/todo" class="arrow">
        &#x276E;
      </a>
      <a href="/todo">1</a>
      <a className="active" href="/todo">
        2
      </a>
      <a href="/todo">3</a>
      <a href="/todo">4</a>
      <a href="/todo">5</a>
      <a href="/todo">6</a>
      <a href="/todo" className="arrow">
        &#10095;
      </a>
    </div>
  );
};

export default Pagination;

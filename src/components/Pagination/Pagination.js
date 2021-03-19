import React from "react";
import "./Pagination.scss";


const Pagination = () => {
  return (
<div className="pagination">
  <a href="#" class="arrow">&#x276E;</a>
  <a href="#" >1</a>
  <a className="active" href="#">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">6</a>
  <a href="#" className="arrow">&#10095;</a>
</div>
  );
};

export default Pagination;

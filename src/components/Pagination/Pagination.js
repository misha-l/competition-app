import React from "react";
import "./Pagination.scss";

class Pagination extends React.Component {
  setCurrentPage = (page) => {
    this.props.setCurrentPage(page);
  };

  handleClick = (page) => (event) => {
    event.preventDefault();
    this.setCurrentPage(page);
  };

  renderPages() {
    let pagesDisplay = [];
    for (let i = 0; i < this.props.totalPages; i++)
      pagesDisplay.push(
        <a
          href="/"
          onClick={this.handleClick(i)}
          key={i}
          className={i === this.props.currentPage ? "active" : ""}
        >
          {i + 1}
        </a>
      );
    return pagesDisplay;
  }

  render() {
    return (
      <div className="pagination">
        {this.props.currentPage > 0 ? (
          <a href="/" onClick={this.handleClick(this.props.currentPage - 1)}>
            &#x276E;
          </a>
        ) : null}

        {this.renderPages()}

        {this.props.currentPage < this.props.totalPages - 1 ? (
          <a href="/" onClick={this.handleClick(this.props.currentPage + 1)}>
            &#10095;
          </a>
        ) : null}
      </div>
    );
  }
}

export default Pagination;

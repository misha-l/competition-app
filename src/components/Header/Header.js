import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./Header.scss";
import { FaRegUserCircle } from "react-icons/fa";
import { withRouter } from "react-router-dom";

class Header extends React.Component {
  /*
  className={
    window.location.pathname === "/Judges" ? "selected" : ""
  }
  */
  state = {
    links: [
      {
        url: "/",
        caption: "Начало",
        selected: false,
      },
      {
        url: "/judges",
        caption: "Жури",
        selected: false,
      },
      {
        url: "/gallery",
        caption: "Галерия",
        selected: false,
      },
      {
        url: "/finalists",
        caption: "Финалисти",
        selected: false,
      },
      {
        url: "/pravila",
        caption: "Правила",
        selected: false,
      },
    ],
  };

  componentDidMount() {
    const selectedLinks = this.state.links.map((link) =>
      link.url === this.props.location.pathname
        ? { ...link, selected: true }
        : link
    );
    this.setState({ links: selectedLinks });
  }

  componentDidUpdate(prevProps, prevState) {
    const selectedLinks = this.state.links.map((link) => {
      return { ...link, selected: false };
    });
    if (JSON.stringify(selectedLinks) !== JSON.stringify(prevState.links))
      this.setState({ links: selectedLinks });
  }

  //

  isActive = (onActive) => (match, location) => {
    if (match) {
      onActive(match.url);
    }
    return match;
  };

  onActive = (matchUrl) => console.log("link " + matchUrl + " is active");

  renderlHeaderLinks() {
    const linksHtml = this.state.links.map((link) => {
      return (
        <li key={link.url}>
          <NavLink
            to={link.url}
            exact
            isActive={this.isActive(this.onActive)}
            activeClassName="active"
            className={link.selected ? "selected" : ""}
          >
            {link.caption} {link.selected}
          </NavLink>
        </li>
      );
    });
    return <ul id="topmenu">{linksHtml}</ul>;
  }

  renderUserLinks() {
    if (this.props.authenticated) {
      return (
        <div>
          <Link to="/signout">Изход</Link>
          <b>&nbsp;/&nbsp;</b>
          <Link
            to={{
              pathname: `/profile/`,
            }}
          >
            Профил
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/register">Регистрация</Link>
          <b>&nbsp;/&nbsp;</b>
          <Link to="/login">Вход</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="header">
        <div className="login">
          {this.renderUserLinks()}

          <FaRegUserCircle />
        </div>
        {this.renderlHeaderLinks()}
        <span>
          <a href="/submit-drawing">Изпрати Рисунка</a>
        </span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default withRouter(connect(mapStateToProps)(Header));

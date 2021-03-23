import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Header.scss";
import { FaRegUserCircle } from "react-icons/fa";

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
        url: "/Judges",
        caption: "Жури",
        selected: false,
      },
      {
        url: "/Gallery",
        caption: "Галерия",
        selected: false,
      },
      {
        url: "/Finalists",
        caption: "Финалисти",
        selected: false,
      },
      {
        url: "/Pravila",
        caption: "Правила",
        selected: false,
      },
    ],
  };

  componentDidMount() {
    console.log(window.location.pathname);
    const selectedLinks = this.state.links.map((link) =>
      link.url === window.location.pathname ? { ...link, selected: true } : link
    );
    this.setState({ links: selectedLinks });
  }

  renderlHeaderLinks() {
    const linksHtml = this.state.links.map((link) => {
      return (
        <li key={link.url}>
          <Link to={link.url} className={link.selected ? "selected" : ""}>
            {link.caption} {link.selected}
          </Link>
        </li>
      );
    });
    return <ul>{linksHtml}</ul>;
  }

  renderUserLinks() {
    if (this.props.authenticated) {
      return (
        <div>
          <Link to="/signout">Sign Out</Link>
          {/* <Link to="/restricted">Resitricted</Link>*/}
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Регистрация</Link>
          <b>&nbsp;/&nbsp;</b>
          <Link to="/signin">Вход</Link>
        </div>
      );
    }
  }

  render() {
    console.log("Header-props", this.props);
    return (
      <div className="header">
        <div className="login">
          {this.renderUserLinks()}

          <FaRegUserCircle />
        </div>
        {this.renderlHeaderLinks()}
        <span>
          <a href="/sdfswrwsdfsdf">Изпрати Рисунка</a>
        </span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);

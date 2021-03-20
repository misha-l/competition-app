import React from "react";
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
    const selectedLinks = this.state.links.map((link) =>
      link.url === window.location.pathname ? { ...link, selected: true } : link
    );
    this.setState({ links: selectedLinks });
  }

  renderlHeaderLinks() {
    const linksHtml = this.state.links.map((link) => {
      return (
        <li key={link.url}>
          <a href={link.url} className={link.selected ? "selected" : ""}>
            {link.caption} {link.selected}
          </a>
        </li>
      );
    });
    return <ul>{linksHtml}</ul>;
  }

  render() {
    return (
      <div className="header">
        <div className="login">
          <a href="/sdfsdfsfd">
            <FaRegUserCircle />
            <b>Вход</b>
          </a>
        </div>
        {this.renderlHeaderLinks()}
        <span>
          <a href="/sdfswrwsdfsdf">Изпрати Рисунка</a>
        </span>
      </div>
    );
  }
}

export default Header;

import { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/images/logo.svg";
import "./Navbar.scss";

class Navbar extends Component {
  state = {
    isVisible: false,
  };
  render() {
    const { changeLanguage, languageData: language } = this.props;
    const { isVisible } = this.state;
    const toggleNav = () => {
      this.setState({ isVisible: !isVisible });
    };
    return (
      <Fragment>
        <div id="header"></div>
        <div className="navbar">
          <div className="navbar-wrapper container">
            <a className="navbar-logo" href="#link">
              <img src={Logo} alt="Navbar Logo" />
            </a>
            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="#ourProduction" className="navbar-link">
                  {language.products}
                </a>
                <ul className="navbar-inner__list">
                  <li>
                    <a href="#ourProduction">{language.headerTitle1}</a>
                  </li>
                  <li>
                    <a href="#ourProduction">{language.headerTitle2}</a>
                  </li>
                  <li>
                    <a href="#ourProduction">{language.headerTitle3}</a>
                  </li>
                </ul>
              </li>
              <li className="navbar-item">
                <a href="#sertificates" className="navbar-link">
                  {language.sertificates}
                </a>
                <ul className="navbar-inner__list">
                  <li>
                    <a href="#ourProduction">{language.headerTitle1}</a>
                  </li>
                  <li>
                    <a href="#ourProduction">{language.headerTitle2}</a>
                  </li>
                  <li>
                    <a href="#ourProduction">{language.headerTitle3}</a>
                  </li>
                </ul>
              </li>
              <li className="navbar-item">
                <a href="#ourteam" className="navbar-link">
                  {language.ourTeam}
                </a>
                <ul className="navbar-inner__list">
                  <li>
                    <a href="#ourProduction">{language.headerTitle1}</a>
                  </li>
                  <li>
                    <a href="#ourProduction">{language.headerTitle2}</a>
                  </li>
                  <li>
                    <a href="#ourProduction">{language.headerTitle3}</a>
                  </li>
                </ul>
              </li>
              <li className="navbar-item">
                <a href="#about" className="navbar-link">
                  {language.about}
                </a>
                <ul className="navbar-inner__list">
                  <li>
                    <a href="#ourProduction">{language.headerTitle1}</a>
                  </li>
                  <li>
                    <a href="#ourProduction">{language.headerTitle2}</a>
                  </li>
                  <li>
                    <a href="#ourProduction">{language.headerTitle3}</a>
                  </li>
                </ul>
              </li>
              <li className="navbar-item">
                <a href="#news" className="navbar-link">
                  {language.news}
                </a>
                <ul className="navbar-inner__list">
                  <li>
                    <a href="#ourProduction">{language.headerTitle1}</a>
                  </li>
                  <li>
                    <a href="#ourProduction">{language.headerTitle2}</a>
                  </li>
                  <li>
                    <a href="#ourProduction">{language.headerTitle3}</a>
                  </li>
                </ul>
              </li>
              <li className="navbar-item">
                <a href="#contact" className="navbar-link">
                  {language.vacancy}
                </a>
                <ul className="navbar-inner__list">
                  <li>
                    <a href="#ourProduction">{language.headerTitle1}</a>
                  </li>
                  <li>
                    <a href="#ourProduction">{language.headerTitle2}</a>
                  </li>
                  <li>
                    <a href="#ourProduction">{language.headerTitle3}</a>
                  </li>
                </ul>
              </li>
              <li className="navbar-item">
                <a href="#footer" className="navbar-link">
                  {language.contact}
                </a>
                <ul className="navbar-inner__list">
                  <li>
                    <a href="#ourProduction">{language.headerTitle1}</a>
                  </li>
                  <li>
                    <a href="#ourProduction">{language.headerTitle2}</a>
                  </li>
                  <li>
                    <a href="#ourProduction">{language.headerTitle3}</a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="navbar-languages">
              <button onClick={() => changeLanguage("ru")}>RU</button>
              <button onClick={() => changeLanguage("en")}>EN</button>
            </div>
            <button onClick={toggleNav} className="open-btn">
              {isVisible ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </div>
        </div>
        <nav className={`inner-nav ${isVisible ? "nav-visible" : ""}`}>
          <ul className="inner-list">
            <li onClick={toggleNav} className="navbar-item">
              <a href="#ourProduction">{language.products}</a>
            </li>
            <li onClick={toggleNav}>
              <a href="#sertificates">{language.sertificates}</a>
            </li>
            <li onClick={toggleNav}>
              <a href="#ourteam">{language.ourTeam}</a>
            </li>
            <li onClick={toggleNav}>
              <a href="#about">{language.about}</a>
            </li>
            <li onClick={toggleNav}>
              <a href="#news">{language.news}</a>
            </li>
            <li onClick={toggleNav}>
              <a href="#contact">{language.vacancy}</a>
            </li>
            <li onClick={toggleNav}>
              <a href="#footer">{language.contact}</a>
            </li>
          </ul>
          <div className="navbar-languages">
            <button onClick={() => changeLanguage("ru")}>RU</button>
            <button onClick={() => changeLanguage("en")}>EN</button>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Navbar;

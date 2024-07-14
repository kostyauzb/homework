import { Component } from "react";
import icon1 from "../../assets/images/vk-icon.svg";
import icon2 from "../../assets/images/facebook-icon.svg";
import icon3 from "../../assets/images/linkedin-icon.svg";
import "./Footer.scss";

import logo from "../../assets/images/logo.svg";
class Footer extends Component {
  render() {
    const { languageData: language } = this.props;
    return (
      <section id="footer" className="footer">
        <div className="footer-wrapper container">
          <div className="footer-head">
            <a className="footer-logo" href="#/">
              <img src={logo} alt="" />
            </a>
            <div className="footer-head__icons">
              <a href="#link">
                <img src={icon1} alt="Footer Icons" />
              </a>
              <a href="#link">
                <img src={icon2} alt="Footer Icons" />
              </a>
              <a href="#link">
                <img src={icon3} alt="Footer Icons" />
              </a>
            </div>
          </div>
          <nav className="footer-nav">
            <ul>
              <h4>{language.products}</h4>
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
            <ul>
              <h4>{language.footerCompany}</h4>
              <li>
                <a href="#about">{language.about}</a>
              </li>
              <li>
                <a href="#ourteam">{language.ourTeam}</a>
              </li>
              <li>
                <a href="#sertificates">{language.sertificates}</a>
              </li>
            </ul>
            <ul>
              <h4>{language.footerSections}</h4>
              <li>
                <a href="#footer">{language.contact}</a>
              </li>
              <li>
                <a href="#news">{language.news}</a>
              </li>
              <li>
                <a href="#contact">{language.vacancy}</a>
              </li>
            </ul>
            <div className="footer-numbers">
              <h3>{language.footerCountry1}</h3>
              <h4>+375 (17) 270 53 77</h4>
              <h4>+375 (17) 270 53 78</h4>
              <h3>{language.footerCountry2}</h3>
              <h4>+7 (495) 280 73 44</h4>
              <h4>+7 (495) 280 73 44</h4>
            </div>
            <div className="footer-numbers">
              <h3>{language.footerCountry3}</h3>
              <h4>+48 73 1111 044</h4>
              <h3 className="mtop">{language.footerCountry4}</h3>
              <h4>+7 (343) 346 82 06</h4>
            </div>
          </nav>
          <p>{language.footerText}</p>
        </div>
      </section>
    );
  }
}

export default Footer;

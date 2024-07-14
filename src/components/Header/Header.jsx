import { Component, Fragment } from "react";
import Slider from "react-slick";

import icon1 from "../../assets/images/vk-icon.svg";
import icon2 from "../../assets/images/facebook-icon.svg";
import icon3 from "../../assets/images/linkedin-icon.svg";

import "./Header.scss";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2500,
  pauseOnHover: false,
};

class Header extends Component {
  render() {
    const { languageData: language } = this.props;
    return (
      <Fragment>
        <div className="header">
          <div className="header-hero">
            <Slider {...settings}>
              <div className="slider-item1">
                <div className="slider-wrapper container">
                  <h4>{language.headerText}</h4>
                  <h1>{language.headerTitle1}</h1>
                  <p>{language.headerDescription}</p>
                  <a className="header-link" href="#/">
                    {language.headerBtn}
                  </a>
                  <div className="header-hero-links">
                    <a href="#link">
                      <img src={icon1} alt="Header Icons" />
                    </a>
                    <a href="#link">
                      <img src={icon2} alt="Header Icons" />
                    </a>
                    <a href="#link">
                      <img src={icon3} alt="Header Icons" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="slider-item2">
                <div className="slider-wrapper container">
                  <h4>{language.headerText}</h4>
                  <h1>{language.headerTitle2}</h1>
                  <p>{language.headerDescription}</p>
                  <a className="header-link" href="#/">
                    {language.headerBtn}
                  </a>
                  <div className="header-hero-links">
                    <a href="#link">
                      <img src={icon1} alt="Header Icons" />
                    </a>
                    <a href="#link">
                      <img src={icon2} alt="Header Icons" />
                    </a>
                    <a href="#link">
                      <img src={icon3} alt="Header Icons" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="slider-item3">
                <div className="slider-wrapper container">
                  <h4>{language.headerText}</h4>
                  <h1>{language.headerTitle3}</h1>
                  <p>{language.headerDescription}</p>
                  <a className="header-link" href="#/">
                    {language.headerBtn}
                  </a>
                  <div className="header-hero-links">
                    <a href="#link">
                      <img src={icon1} alt="Header Icons" />
                    </a>
                    <a href="#link">
                      <img src={icon2} alt="Header Icons" />
                    </a>
                    <a href="#link">
                      <img src={icon3} alt="Header Icons" />
                    </a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Header;

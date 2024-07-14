import { Component } from "react";
import Slider from "react-slick";
import sertificate1 from "../../assets/images/sertificate1.png";
import sertificate2 from "../../assets/images/sertificate2.png";
import sertificate3 from "../../assets/images/sertificate3.png";
import sertificate4 from "../../assets/images/sertificate4.png";
import sertificate5 from "../../assets/images/sertificate5.png";
import "./Sertificates.scss";

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1130,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 430,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export class Sertificates extends Component {
  render() {
    const { languageData: langugae } = this.props;
    return (
      <div id="sertificates" className="sertificates">
        <div className="container">
          <h1>
            {langugae.sertificatesTitle}
            <span> {langugae.sertificatesSpan}</span>
          </h1>
          <div className="slider-cards">
            <Slider {...settings}>
              <div className="slider-card">
                <img src={sertificate1} alt="Slider Images" />
              </div>
              <div className="slider-card">
                <img src={sertificate2} alt="Slider Images" />
              </div>
              <div className="slider-card">
                <img src={sertificate3} alt="Slider Images" />
              </div>
              <div className="slider-card">
                <img src={sertificate4} alt="Slider Images" />
              </div>
              <div className="slider-card">
                <img src={sertificate5} alt="Slider Images" />
              </div>
              <div className="slider-card">
                <img src={sertificate1} alt="Slider Images" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default Sertificates;

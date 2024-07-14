import React, { Component } from "react";

import "./About.scss";

export class About extends Component {
  render() {
    const { languageData: language } = this.props;
    return (
      <div id="about" className="about">
        <h1>
          {language.aboutTitle} <span>leangroup</span>
        </h1>
        <div className="about-wrapper">
          <div className="about-video">
            <iframe
              src="https://www.youtube.com/embed/jDLuJLoaA_g?si=3hE8ul9PuWA2D_V4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="about-text">
            <p>{language.aboutText1}</p>
            <p>{language.aboutText2}</p>
            <p>{language.aboutText3}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

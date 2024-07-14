import { Component } from "react";
import card1 from "../../assets/images/news-card1.png";
import card2 from "../../assets/images/news-card2.png";
import card3 from "../../assets/images/news-card3.png";
import "./News.scss";

export class News extends Component {
  render() {
    const { languageData: language } = this.props;
    return (
      <section id="news" className="news">
        <h1>{language.news}</h1>
        <div className="news-cards">
          <div className="news-card">
            <img src={card1} alt="" />
            <h5>28.01.2022</h5>
            <p>"ЛеанГрупп" {language.newsCardText1}</p>
          </div>
          <div className="news-card">
            <img src={card2} alt="" />
            <h5>21.01.2022</h5>
            <p>"ЛеанГрупп" {language.newsCardText1}</p>
          </div>
          <div className="news-card">
            <img src={card3} alt="" />
            <h5>16.12.2021</h5>
            <p>{language.newsCardText2}</p>
          </div>
        </div>
        <a className="news-link" href="#link">
          {language.newsLink}
        </a>
      </section>
    );
  }
}

export default News;

import { Component } from "react";
import "./OurTeam.scss";
import card1 from "../../assets/images/ourteam-img1.png";
import card2 from "../../assets/images/ourteam-img2.png";
import card3 from "../../assets/images/ourteam-img3.png";
import card4 from "../../assets/images/ourteam-img4.png";
import card5 from "../../assets/images/ourteam-img5.png";
// import Cards from "./../../data/Cards";
// import OurTeamCard from "../Our-Team-Card/OurTeamCard";

export class OurTeam extends Component {
  render() {
    const { languageData: language } = this.props;
    return (
      <section id="ourteam" className="our-team">
        <h1>
          {language.ourTeamTitle} <span>{language.ourTeamTitleSpan}</span>
        </h1>
        <div className="our-team__cards">
          {/* {Cards.map((card) => {
            return (
              <OurTeamCard
                key={card.id}
                name={card.name}
                image={card.image}
                description={card.description}
                phoneNumber1={card.phoneNumber1}
                phoneNumber2={card.phoneNumber2}
                gmail={card.gmail}
              />
            );
          })} */}
          <div className="our-team__card">
            <img src={card1} alt="" />
            <h4>Войнич Дарья</h4>
            <p>{language.ourTeamCardText1}</p>
            <h5>+375 (17) 270-53-77 (317)</h5>
          </div>
          <div className="our-team__card">
            <img src={card2} alt="" />
            <h4>Мисько Екатерина</h4>
            <p>{language.ourTeamCardText2}</p>
            <h5>+375 (17) 270-53-77 (115)</h5>
            <h5>+375 29 112-73-48</h5>
            <h6>k.melnichenko@leangroup.by</h6>
          </div>
          <div className="our-team__card">
            <img src={card3} alt="" />
            <h4>Дмитроченко Дмитрий</h4>
            <p>{language.ourTeamCardText3}</p>
            <h5>+375 (17) 270-53-77 (333)</h5>
            <h5> +375 29 360-32-26</h5>
            <h6>dmitrochenko@leangroup.by</h6>
          </div>
          <div className="our-team__card">
            <img src={card4} alt="" />
            <h4>Антух Евгений</h4>
            <p>{language.ourTeamCardText4}</p>
            <h5>+375 (17) 270-53-77 (148)</h5>
            <h5> +375 44 764-16-28</h5>
            <h6>j.antuh@leangroup.by</h6>
          </div>
          <div className="our-team__card">
            <img src={card5} alt="" />
            <h4>Мисник Елена</h4>
            <p>{language.ourTeamCardText5}</p>
            <h5>+375 (17) 270-53-77 (322)</h5>
            <h5> +375 29 329-34-03</h5>
            <h6>e.misnik@leangroup.by</h6>
          </div>
        </div>
        <a href="#link">{language.ourTeamLink}</a>
      </section>
    );
  }
}

export default OurTeam;

import { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/card3.png";
import card4 from "../../assets/images/card4.png";
import card5 from "../../assets/images/card5.png";

import "react-tabs/style/react-tabs.css";
import "./OurProduction.scss";

class OurProduction extends Component {
  render() {
    const { languageData: language } = this.props;
    return (
      <section id="ourProduction" className="production">
        <h1>
          {language.ourProductionTitle}
          <span> {language.ourProductionTitleSpan}</span>
        </h1>
        <Tabs className="tab">
          <TabList className="tablist">
            <Tab>
              <button>{language.headerTitle1}</button>
            </Tab>
            <Tab>
              <button>{language.headerTitle2}</button>
            </Tab>
            <Tab>
              <button>{language.headerTitle3}</button>
            </Tab>
          </TabList>

          <TabPanel className="tab-panel">
            <img src={card1} alt="Card Images" />
            <img src={card2} alt="Card Images" />
            <img src={card3} alt="Card Images" />
            <img src={card4} alt="Card Images" />
            <img src={card5} alt="Card Images" />
          </TabPanel>
          <TabPanel className="tab-panel">
            <img src={card3} alt="Card Images" />
            <img src={card4} alt="Card Images" />
            <img src={card1} alt="Card Images" />
            <img src={card5} alt="Card Images" />
            <img src={card2} alt="Card Images" />
          </TabPanel>
          <TabPanel className="tab-panel">
            <img src={card2} alt="Card Images" />
            <img src={card5} alt="Card Images" />
            <img src={card3} alt="Card Images" />
            <img src={card1} alt="Card Images" />
            <img src={card4} alt="Card Images" />
          </TabPanel>
        </Tabs>
        <a href="#/">{language.ourProductionLink}</a>
      </section>
    );
  }
}

export default OurProduction;

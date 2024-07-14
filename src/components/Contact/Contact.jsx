import { Component } from "react";
import icon1 from "../../assets/images/contact-icon-1.svg";
import icon2 from "../../assets/images/contact-icon-2.svg";
import "./Contact.scss";

export class Contact extends Component {
  render() {
    const { languageData: language } = this.props;
    return (
      <section id="contact" className="contact">
        <h1>
          {language.contactTitle} <span>{language.contactTitleSpan}</span>
        </h1>
        <p>{language.contactText}</p>
        <form className="contact-form">
          <div className="contact-form__inputs">
            <div className="contact-form__input__wrapper">
              <div className="input-icon">
                <img src={icon1} alt="Icon img" />
              </div>
              <input type="text" placeholder={language.namePlaceholder} />
            </div>
            <div className="contact-form__input__wrapper">
              <div className="input-icon">
                <img src={icon2} alt="Icon img" />
              </div>
              <input type="tel" placeholder="+375 (29) 0000000" />
            </div>
          </div>
          <textarea
            placeholder={language.textAreaPlaceholder}
            cols="30"
            rows="10"
          ></textarea>
          <br />
          <button>{language.contactLink}</button>
        </form>
      </section>
    );
  }
}

export default Contact;

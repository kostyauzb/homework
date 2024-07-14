import React, { Component, Fragment } from "react";

import { toast } from "react-toastify";

import OurTeam from "../components/Our-Team/OurTeam";
import News from "./../components/News/News";
import Navbar from "./../components/Navbar/Navbar";
import EN from "../language/en";
import RU from "../language/ru";
import Backtop from "../components/Back-Top/Backtop";
import OurProduction from "../components/Our-Production/OurProduction";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Sertificates from "../components/Sertificates/Sertificates";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export class HomePage extends Component {
  state = {
    language: "ru",
  };

  render() {
    const { language } = this.state;
    const changeLanguage = (language) => {
      this.setState({ language });
      toast.success(
        `${
          language === "ru"
            ? "Язык был изменен"
            : "The language has been changed"
        }`,
        {
          autoClose: 2000,
          position: "top-left",
        }
      );
    };

    const languagesData = {
      en: EN,
      ru: RU,
    };

    const languageData = languagesData[language];

    return (
      <Fragment>
        <Navbar languageData={languageData} changeLanguage={changeLanguage} />
        <Header languageData={languageData} />
        <main className="container">
          <About languageData={languageData} />
          <Sertificates languageData={languageData} />
          <OurProduction languageData={languageData} />
          <Contact languageData={languageData} />
          <OurTeam languageData={languageData} />
          <News languageData={languageData} />
          <Backtop />
        </main>
        <Footer languageData={languageData} />
      </Fragment>
    );
  }
}

export default HomePage;

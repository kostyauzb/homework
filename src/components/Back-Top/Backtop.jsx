import { Component } from "react";

import backtop from "../../assets/images/backtop-icon.svg";

import "./Backtop.scss";

class Backtop extends Component {
  render() {
    return (
      <a className="backtop" href="#header">
        <img src={backtop} alt="Backtop Icon" />
      </a>
    );
  }
}

export default Backtop;

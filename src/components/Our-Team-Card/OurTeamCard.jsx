import { Component } from "react";
import "./OurTeamCard.scss";

export class OurTeamCard extends Component {
  render() {
    const { name, image, description, phoneNumber1, phoneNumber2, email } =
      this.props;
    return (
      <div>
        <div className="our-team__card">
          <img src={image} alt="" />
          <h4>{name}</h4>
          <p>{description}</p>
          <h5>{phoneNumber1}</h5>
          <h5>{phoneNumber2}</h5>
          <h6>{email}</h6>
        </div>
      </div>
    );
  }
}

export default OurTeamCard;

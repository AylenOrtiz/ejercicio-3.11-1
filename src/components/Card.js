import React from "react";

class Card extends React.Component {
  render() {
    return (
      <section>
        <h1 className="userName">{this.props.name}</h1>
        <img className="profile" src={this.props.image} alt="" />
        <h3 className="userCity">{this.props.city}</h3>
        <h3 classNme="userAge">{this.props.age}</h3>
        <h3 classNme="userGender">{this.props.gender}</h3>
      </section>
    );
  }
}

export default Card;

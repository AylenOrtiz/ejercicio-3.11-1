import React from "react";

class Filters extends React.Component {
  render() {
    return (
      <div>
        <label>Introduce la ciudad</label>
        <input type="text" onChange={this.props.onCityChange} />
        <label>Introduce el género</label>
        <input type="text" onChange={this.props.onGenderChange} />
      </div>
    );
  }
}

export default Filters;

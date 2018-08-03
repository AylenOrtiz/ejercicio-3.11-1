import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card";
import Filters from "./components/Filters";

const ENDPOINT = "https://randomuser.me/api/?results=50";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [],
      city: "",
      gender: ""
    };
    this.fetchFilter();
    this.fetchFilter = this.fetchFilter.bind(this);
    this.changeCity = this.changeCity.bind(this);
    this.changeGender = this.changeGender.bind(this);
  }

  fetchFilter() {
    fetch(ENDPOINT)
      .then(response => response.json())
      .then(data => {
        this.setState({
          persons: data.results
        });
      });
  }
  changeCity(event) {
    const cityValue = event.target.value;
    this.setState(prevState => {
      return { ...prevState, city: cityValue };
    });
  }
  changeGender(event) {
    const genderValue = event.target.value;
    this.setState(prevState => {
      return { ...prevState, gender: genderValue };
    });
  }

  render() {
    const personitas = this.state.persons;
    const filtroCity = this.state.city;
    const filtroGender = this.state.gender;
    const filterPersonByCity = personitas.filter(person =>
      person.location.city.includes(filtroCity)
    );
    const filterPersonByGender = filterPersonByCity.filter(
      person => person.gender.startsWith(filtroGender) //startsWith se usa para buscar por principio de palabra y no por palabra entera.
    );
    const resultFilterGender = filterPersonByGender.map(person => {
      return (
        <Card
          name={person.name.first}
          image={person.picture.medium}
          city={person.location.city}
          age={person.dob.age}
          gender={person.gender}
        />
      );
    });
    return (
      <div className="App">
        <Filters
          onCityChange={this.changeCity}
          onGenderChange={this.changeGender}
        />
        {resultFilterGender}
      </div>
    );
  }
}

export default App;

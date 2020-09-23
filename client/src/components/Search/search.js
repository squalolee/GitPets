import React, { Component } from "react";
import Axios from "axios";
// import Table from "../Table/table"; 
import ResultsCard from "../ResultsCard/resultscard";
import Nav from "../Nav/nav"; 
import "./style.css";
// import { Redirect } from "react-router-dom"; 

class Form extends Component {
  // Setting the component's initial state
  state = {
    pet: "",
    breed: "", 
    location: "", 
    range: "", 
    gender: "", 
    age: "", 
    size: "" 
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    
    this.setState({
        pet: "",
        breed: "", 
        location: "", 
        range: "", 
        gender: "", 
        age: "", 
        size: ""
    });

    let state = this; 

    Axios.post("/api/search", {
      pet: this.state.pet,
      breed: this.state.breed, 
      location: this.state.location, 
      range: this.state.range, 
      gender: this.state.gender, 
      age: this.state.age, 
      size: this.state.size
    })
    .then(function(response) {
      console.log(response.data.animals);
      state.setState({
        searchResults: response.data.animals,
        // redirect: "/resultscard"
      })
    })
    .catch(function(error) {
      console.log(error);
    });
  };


  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    if (this.state.searchResults) {
      return (
        <div>
          <Nav />
          <ResultsCard 
            searchResults={this.state.searchResults}
          
          />
        </div>
      )
    }
    else {
      return (
        <div>
          <Nav />
          <h2>
            Find your new best friend!
          </h2>
          <form className="center">
            <div className="col-auto">
              <input
               value={this.state.pet}
               name="pet"
               onChange={this.handleInputChange}
               type="text"
               placeholder="Pet"
              />
            </div>
            <div className="col-auto">
              <input
               value={this.state.breed}
               name="breed"
               onChange={this.handleInputChange}
               type="text"
               placeholder="Breed"
              />
            </div>
            <div className="col-auto">
              <input
               value={this.state.location}
               name="location"
               onChange={this.handleInputChange}
               type="text"
               placeholder="Location"
              />
            </div>
            <div className="col-auto">
              <input
               value={this.state.range}
               name="range"
               onChange={this.handleInputChange}
               type="number"
               placeholder="Range"
              />
            </div>
            <div className="col-auto">
              <input
                value={this.state.gender}
                name="gender"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Gender"
              />
            </div>
            <div className="col-auto">
              <input
                value={this.state.age}
                name="age"
                onChange={this.handleInputChange}
                type="number"
                placeholder="Age"
              />
            </div>
            <div className="col-auto">
              <input
                 value={this.state.size}
                 name="size"
                 onChange={this.handleInputChange}
                 type="text"
                 placeholder="Size"
              />
            </div>
            <button className="btn-primary" onClick={this.handleFormSubmit}>Submit</button>
          </form>
          {/* <form className="form">
            <input
              value={this.state.pet}
              name="pet"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Pet"
            />
            <input
              value={this.state.breed}
              name="breed"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Breed"
            />
            <input
              value={this.state.location}
              name="location"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Location"
            />
            <input
              value={this.state.range}
              name="range"
              onChange={this.handleInputChange}
              type="number"
              placeholder="Range"
            />
            <input
              value={this.state.gender}
              name="gender"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Gender"
            />
            <input
              value={this.state.age}
              name="age"
              onChange={this.handleInputChange}
              type="number"
              placeholder="Age"
            />
            <input
              value={this.state.size}
              name="size"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Size"
            />
            <button onClick={this.handleFormSubmit}>Submit</button>
          </form> */}
        </div>
      );
    }
  }
}

export default Form;



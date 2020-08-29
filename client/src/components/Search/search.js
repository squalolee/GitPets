import React, { Component } from "react";
import "./style.css";

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
    alert(`Let's find a ${this.state.pet} for you!`);
    this.setState({
        pet: "",
        breed: "", 
        location: "", 
        range: "", 
        gender: "", 
        age: "", 
        size: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Find your new best friend!
        </p>
        <form className="form">
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
        </form>
      </div>
    );
  }
}

export default Form;



// <div class="col-md-8">
//                     <div class="panel panel-default justify-content-center">
//                         <div class="panel-heading" id="rightside">
//                             <strong>Find Your Best Friend!</strong>
//                         </div>
//                         <div class="panel-body">
//                             <form id="search-form">
//                                 <div class="form-row">
//                                     <div class="form-group col-md-12">
//                                         <label for="pet">Pet Type</label>
//                                         <input type="text" class="form-control" id="pet">
//                                     </div>
//                                     <div class="form-group col-md-12">
//                                         <label for="location">Location</label>
//                                         <input type="text" class="form-control" id="location">
//                                     </div>
//                                 </div>
//                                 <div class="form-row">
//                                     <div class="form-group col-md-6">
//                                         <label for="gender">Gender</label>
//                                         <select id="gender" class="form-control">
//                                             <option selected>Choose...</option>
//                                             <option>Male</option>
//                                             <option>Female</option>
//                                         </select>
//                                     </div>
//                                     <div class="form-group col-md-6">
//                                         <label for="age">Age</label>
//                                         <select id="age" class="form-control">
//                                             <option selected>Choose...</option>
//                                             <option>Young</option>
//                                             <option>Adult</option>
//                                             <option>Senior</option>
//                                         </select>
//                                     </div>
//                                 </div>
//                                 <button type="submit" class="btn btn-success btn-block" id="go-fetch">Go Fetch!</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
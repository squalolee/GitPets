import React, {Component} from "react";
import Axios from "axios";
import { Link } from 'react-router-dom'

class Signup extends Component {
    state = {
        firstname: "", 
        lastname: "", 
        email: "",
        password: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target; 

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        console.log('creating new user profile for ${this.state.firstname} $(this.state.lastname}.');
        this.setState({
            firstname: "",
            lastname: "", 
            email: "", 
            password: ""
        });

        Axios.post("/api/signup", {
            firstname: this.state.firstname, 
            lastname: this.state.lastname, 
            email: this.state.email, 
            password: this.state.password
        })
        .catch(function(error) {
            console.log(error);
        });
    };

    

    render() {
        return (
            <div>
                <p>
                    Create an account!
                </p>
                <form className="form">
                    <input
                        value={this.state.firstname}
                        name="firstname"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        value={this.state.lastname}
                        name="lastname"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Last Name"
                    />
                    <input
                        value={this.state.email}
                        name="email"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Email"
                    />
                    <input
                        value={this.state.password}
                        name="password"
                        onChange={this.handleInputChange}
                        type="password"
                        placeholder="Password"
                    />
                    <button onClick={this.handleFormSubmit}><Link to ="/profile">Submit!</Link></button>
                </form>
            </div>
        );
    }
}

export default Signup; 


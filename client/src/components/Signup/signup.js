import React, {Component} from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom"; 

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

        console.log("creating new user profile");
        // this.setState({
        //     firstname: "",
        //     lastname: "", 
        //     email: "", 
        //     password: ""
        // });

        Axios.post("/api/user", {
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
            <div className="center">
                <h2>
                    Create an account!
                </h2>
                <form className="form">
                    <div className="form-group">
                        <input
                            value={this.state.firstname}
                            name="firstname"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="First Name"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            value={this.state.lastname}
                            name="lastname"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Last Name"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            value={this.state.email}
                            name="email"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Email"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            value={this.state.password}
                            name="password"
                            onChange={this.handleInputChange}
                            type="password"
                            placeholder="Password"
                        />
                    </div>

                    <button onClick={this.handleFormSubmit}>Submit!</button>
                </form>
            </div>
        );
    }
}

export default Signup; 


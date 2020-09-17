import React, { Component } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom"; 

class Login extends Component {
    state = {
        email: "",
        password: "", 
        loginSuccess: false
    };

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        console.log('logging in!');
        // this.setState({
        //     email: "", 
        //     password: ""
        // });

        Axios.post("/api/login", {
            username: this.state.email,
            password: this.state.password
        })
            .then((response) => {
                console.log(response); 
                if (response.data === "success") {
                    this.setState({
                        loginSuccess: true
                    })
                    console.log("in the if block"); 
                }
            })
        .catch (function(error) {
            console.log(error);
        });
    };

render() {
    if (this.state.loginSuccess === true) {
        return <Redirect to="/profile" />
    }
    return (
        <div>
            <p>
                Login to your account!
                </p>
            <form className="form">
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
                <button onClick={this.handleFormSubmit}>Submit!</button>
            </form>
        </div>
    );
}
}

export default Login; 
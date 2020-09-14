import React, {Component} from "react";
import Axios from "axios";
import Nav from "../Nav/nav";

class Profile extends Component {
    state = {
        firstname: "",
        lastname: "", 
        email: "",
        password: "",
        useravatar: ""
    };

    handleInputChange = event => {
        const {name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        console.log('editing user profile');
        this.setState({
            firstname: "",
            lastname: "", 
            email: "",
            password: "",
            useravatar: ""
        });

        Axios.post("/api/profile", {
            firstname: this.state.firstname, 
            lastname: this.state.lastname, 
            email: this.state.email, 
            password: this.state.password,
            useravatar: this.state.useravatar

        })
        .catch(function(error) {
            console.log(error);
        });
    };

    render() {
        return (
            <div>
            <p>
                Your user page!
            </p>
            <Nav />
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
                    <input 
                        value={this.state.useravatar}
                        name="useravatar"
                        onChange={this.handleInputChange}
                        type="file"
                        accept="image/*"
                        multiple = "false"
                        placeholder="User Avatar"
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>

                </form>

        </div>
        );
    }
}


export default Profile;


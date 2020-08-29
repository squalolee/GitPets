import React, {Component} from "react";

class Login extends Component {
    state = {
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

        console.log('logging in!');
        this.setState({
            email: "", 
            password: ""
        });
    };

    render() {
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
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Login; 
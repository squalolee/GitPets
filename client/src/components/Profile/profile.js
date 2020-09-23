import React, { Component } from "react";
import Axios from "axios";
import Nav from "../Nav/nav";
import Table from "../Table/table";
import "./style.css"; 

class Profile extends Component {
    state = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        useravatar: "",
        favoritePet: []
    };

    //     let tempArr = this.state.favoritePet;
    // tempArr.push(data.data[0]);
    // this.setState({favoritePet: tempArr});

    componentWillMount = () => {
        Axios.get("/api/profile")
            .then((data) => {
                console.log(data.data);
                data.data.map(search => {
                    console.log("searching for favorites from current user"); 
                    Axios.post("/api/profilesearch", {
                        searchid: search.searchid
                    })
                        .then(response => {
                            console.log(response);
                            let tempArr = this.state.favoritePet;
                            tempArr.push(response.data.animal);
                            this.setState({ favoritePet: tempArr });
                        })
                })
            })
    }

    componentDidMount = () => {
        this.state.favoritePet && console.log(this.state.favoritePet); 
    }

    //testFunction = () => {
    //     Axios.get("/api/profile")
    //     .then((data) => {
    //         console.log(data); 
    //     })
    // }

    //axios.get to profile gets user id associated w/ that animal, searchid
    //want to get searchid for favorited animals and info assoc w/ that searchid from the api
    //need to display the info for those favorited aniamls to the user

    // When the profile page loads, make an API request to /api/profile.
    // /api/profile returns data on the resultsCards that are associated with the user.
    // We should now sort through that returned data to request the information about the specific search ID's from the git pets api.
    // Something like
    // axios.get(`gitpetsapisomething.com?id=${data.data.searchId}`)


    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        console.log('editing user profile');
        // this.setState({
        //     firstname: "",
        //     lastname: "",
        //     email: "",
        //     password: "",
        //     useravatar: ""
        // });

        Axios.post("/api/profile", {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            useravatar: this.state.useravatar

        })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        return (
            <div>
                <p>
                    Welcome to your user page!
                </p>
                <Nav />
                <div className="container updateForm">
                    <h1 className="h1">Update User Information:</h1>
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
                            multiple="false"
                            placeholder="User Avatar"
                        />
                        <button onClick={this.handleFormSubmit}>Submit</button>

                    </form>
                </div>
                {
                    this.state.favoritePet && 
                    <Table 
                        data={this.state.favoritePet}
                    />
                }

            </div>
        );
    }
}



export default Profile;


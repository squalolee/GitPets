import React, {Component} from "react";
import Axios from "axios";


class Forum extends Component {
    state = {
        name: "", 
        posttitle: "", 
        postbody: ""
    };


    handleInputChange = event => {
        const { name, value } = event.target; 

        this.setState({
            [name]: value
        });

        console.log("here");
    };

    handleFormSubmit = event => {
        event.preventDefault(); 
        console.log(`creating new blog post by ${this.state.name}`); 
        this.setState({
            name: "", 
            posttitle: "", 
            postbody: ""
        }); 

        console.log(`${this.state.name}`);
        console.log(`${this.state.posttitle}`);
        console.log(`${this.state.postbody}`);

        Axios.post("/api/forum", {
            name: this.state.name, 
            posttitle: this.state.posttitle, 
            postbody: this.state.postbody
        })
        .catch(function(error) {
            console.log(error); 
        });
    };

    render() {
        return (
            <div>
                <h1>Welcome to the GitPets Blog!</h1>
                <p>Post your adoption stories, ask questions, or leave us pictures of your furry friends!</p>
                <form className="form">
                    <input 
                    value={this.state.name}
                    name="name"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Name to be displayed"
                    />
                    <input 
                    value={this.state.posttitle}
                    name="posttitle"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Post Title"
                    />
                    <input 
                    value={this.state.postbody}
                    name="postbody"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Your post here!"
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    }

}


export default Forum; 


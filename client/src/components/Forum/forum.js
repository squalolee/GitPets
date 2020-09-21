import React, {Component} from "react";
import Axios from "axios";
import Posts from "../Posts/index";
import Nav from "../Nav/nav";


class Forum extends Component {
    constructor() {
        super();
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    state = {
        name: "", 
        posttitle: "", 
        postbody: "",
        upvote: 0,
        downvote: 0
    };


    handleInputChange = event => {
        const { name, value } = event.target; 

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault(); 
        console.log(`creating new blog post by ${this.state.name}`); 
        // this.setState({
        //     name: "", 
        //     posttitle: "", 
        //     postbody: ""
        // }); 

        console.log(`${this.state.name}`);
        console.log(`${this.state.posttitle}`);
        console.log(`${this.state.postbody}`);

        Axios.post("/api/forum", {
            name: this.state.name, 
            posttitle: this.state.posttitle, 
            postbody: this.state.postbody,
            upvote: this.state.upvote, 
            downvote: this.state.downvote
        })
        .catch(function(error) {
            console.log(error); 
        });
    };

    render() {
        return (
            <div className="center">
                <Nav />
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
                {/* {
                    this.props.posts.map(posts => {
                        return (
                            <Posts posts={posts}/>
                        );
                    })
                } */}
            <Posts 
                posts={this.state.posts}
            />
            </div>
        );
    }

}


export default Forum; 


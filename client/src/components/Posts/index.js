import React, { Component } from 'react';
import Axios from 'axios';

class Posts extends Component {

  // handleUpvote = (post, key) => {
  //   this.props.firebase.ref('posts/' + key).set({
  //     title: post.title,
  //     upvote: post.upvote + 1,
  //     downvote: post.downvote
  //   });
  // }

  handleUpvote = event => {
    event.preventDefault(); 
    console.log("upvote!"); 
    Axios.post("/api/forum", {
        name: this.state.name, 
        posttitle: this.state.posttitle, 
        postbody: this.state.postbody,
        upvote: this.state.upvote + 1, 
        downvote: this.state.downvote 
    });
  }
  
  // handleDownvote = (post, key) => {
  //   this.props.firebase.ref('posts/' + key).set({
  //     title: post.title,
  //     upvote: post.upvote,
  //     downvote: post.downvote + 1
  //   });
  // }

  handleDownvote = event => {
    event.preventDefault();
    console.log("downvote!"); 
    Axios.post("/api/forum", {
      name: this.state.name, 
      posttitle: this.state.posttitle, 
      postbody: this.state.postbody, 
      upvote: this.state.upvote, 
      downvote: this.state.downvote + 1
    });
  }

  render() {
    let posts = this.props.posts;
    let _this = this;
  
    if (!posts) {
      return false;
    }
  
    if (this.props.loading) {
      return (
        <div>
          Loading...
        </div>
      );
    }
  
    return (
      <div className="Posts">
        { Object.keys(posts).map(function(key) {
            return (
              <div key={key}>
                <div>Name: { posts[key].name }</div>
                <div>Title: { posts[key].posttitle }</div>
                <div>Post: { posts[key].postbody }</div>
                <div>Upvotes: { posts[key].upvote }</div>
                <div>Downvotes: { posts[key].downvote }</div>
                <div>
                  <button
                    onClick={ _this.handleUpvote.bind(this, posts[key], key) }
                    type="button"
                  >
                    Upvote
                  </button>
                  <button
                    onClick={ _this.handleDownvote.bind(this, posts[key], key) }
                    type="button"
                  >
                    Downvote
                  </button>
                </div>
              </div>
            );
        })}
      </div>
    );
  }
}

export default Posts;
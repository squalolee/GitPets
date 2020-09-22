import React, { Component } from "react";
import Axios from "axios";



class PostItem extends Component {

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
    return (
      <div className="Posts">
        <div key={key}>
          <div>Name: {posts[key].name}</div>
          <div>Title: {posts[key].posttitle}</div>
          <div>Post: {posts[key].postbody}</div>
          <div>Upvotes: {posts[key].upvote}</div>
          <div>Downvotes: {posts[key].downvote}</div>
          <div>
            <button
              onClick={_this.handleUpvote.bind(this, posts[key], key)}
              type="button"
            >
              Upvote
                  </button>
            <button
              onClick={_this.handleDownvote.bind(this, posts[key], key)}
              type="button"
            >
              Downvote
                  </button>
          </div>
        </div>
      </div>
    );
  }


            // <div>
            //     <div className="card item">
            //         <div className="img-container">
            //             <img alt={this.props.result.name} src={this.props.result.photos.small} />
            //         </div>
            //         <button className="favoriteBtn" onClick={this.handleFavoriteClick} data-key={this.props.result.id}>
            //             {
            //                 this.state.favorite ? element2 : element
            //             }

            //         </button>
            //         <div className="content">
            //             <ul>
            //                 <li>
            //                     <strong>Name:</strong> {this.props.result.name}
            //                 </li>
            //                 <li>
            //                     <strong>Age:</strong> {this.props.result.age}
            //                 </li>
            //                 <li>
            //                     <strong>Description:</strong> {this.props.result.description}
            //                 </li>
            //             </ul>
            //         </div>
            //     </div>
            // </div>
}



export default PostItem; 
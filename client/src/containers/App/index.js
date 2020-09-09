import React, { Component } from './node_modules/react';
import * as firebase from "./node_modules/firebase";
import firebaseConfig from './firebase-config';

class App extends Component {
    constructor() {
        super();

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    };
    componentWillMount() {
        let postsRef = firebase.database().ref('posts');

        let _this = this;

        postsRef.on('value', function (snapshot) {
            console.log(snapshot.val());

            _this.setState({
                posts: snapshot.val(),
                loading: false
            });
        });
    }
    render() {
      return (
        <div className="App">
          {this.props.children && React.cloneElement(this.props.children, {
            // https://github.com/ReactTraining/react-router/blob/v3/examples/passing-props-to-children/app.js#L56-L58
            firebase: firebase.database(),
            posts: this.state.posts,
            loading: this.state.loading
          })}
        </div>
      );
    }
}

export default App;
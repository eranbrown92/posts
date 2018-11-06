import React from "react";
import ReactDOM from "react-dom";
import Posts from './components/Posts'

import "./styles.css";

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      posts: []
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(posts => this.setState({posts}))
  }
  render(){
    return(
      <div className='container'>

        {this.state.posts.length === 0? 
        "There are no posts available":
        
         <div className='mb-2'>
            <button type="button" className="btn btn-primary">
              Posts <span className="badge badge-light">{this.state.posts.length}</span>
            </button>
         </div>
         }

        <Posts post={this.state.posts}  />
      </div>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

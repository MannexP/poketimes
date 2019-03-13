import React, { Component } from 'react';
import axios from 'axios'

class Post extends Component {
    state = {
        post: null
    }
    componentDidMount(){
        // console.log(this.props)
        let id = this.props.match.params.post_id;
        axios.get('http://jsonplaceholder.typicode.com/posts/' + id)
       .then(res => {
           this.setState({
               post: res.data
           })
        //    console.log(res)
       })
    }
    render() {
        // this checks if the post exists in state and it has set, if so returns true, if not it returns null
        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
            <div className="center">Loading Posts...</div>
        )
        return (
           <div className="center">

               <h4>{ post }</h4>
           </div>
        );
    }
}

export default Post;


import React, {Component} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'


class  Home extends Component {
    state = {
        posts:[]
    }
    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                this.setState({
                    posts:res.data.slice(0,10)
                })
            })
    }
    render(){
        // brings state down
        const { posts } = this.state;
        // use ternary operator to check is the data has been received
        const postList = posts.length ? (
            // cycle through post length. and fire a function for each post. using the ID of individual posts from object
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                        <Link to={'/' + post.id}>
                            <span className="card-title">{post.title}</span>
                        </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            // if no posts return message
            <div className="center">No posts yet</div>
        )
        return (
            // returns postList object, all posts from object
            <div className="container">
                <h4 className="center">Home</h4>
                    {postList}
            </div>
        );
    }
}

export default Home;




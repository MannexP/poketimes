import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Pokeball from '../Pokeball.png'

class  Home extends Component {
    
    render(){
        console.log(this.props)
        // brings state down
        const { posts } = this.props;
        // use ternary operator to check is the data has been received
        const postList = posts.length ? (
            // cycle through post length. and fire a function for each post. using the ID of individual posts from object
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="PokeBall"/>
                        <div className="card-content">
                        <Link to={'/' + post.id}>
                            <span className="card-title red-text">{post.title}</span>
                        </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            // if no posts return message
            <div className="center ">No posts yet</div>
        )
        return (
            // returns postList object, all posts from object
            <div className="container">
                <h4 className="center home">Home</h4>
                    {postList}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
 return {
     posts: state.posts
 }
}

export default connect(mapStateToProps)(Home);




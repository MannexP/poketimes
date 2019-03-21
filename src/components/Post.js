import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
    
    render() {
        // this checks if the post exists in state and it has set, if so returns true, if not it returns null
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
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

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapDistpatchToProps = (dispatch) => {

}

export default connect(mapStateToProps)(Post);


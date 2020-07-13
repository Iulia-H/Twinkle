import React from "react";

class Comment extends React.Component{
    constructor(props){
        super(props);
        
    }

    render(){
        return(
            <div className="comment">
                <h1 className="username">{this.props.comment.user.username}</h1>
                {/* {this.props.comment.user_id} */}
                <p className="content">{this.props.comment.body}</p>
            </div>
        )
    }
}

export default Comment;


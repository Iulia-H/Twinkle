import React from "react"

class Comment extends React.Component{
    constructor(props){
        super(props);
        
    }

    render(){
        console.log(this.props.user.username);
        return(
            <div className="comment">
                <h1>{this.props.user.username}</h1>
                {/* {this.props.comment.user_id} */}
                {this.props.comment.body}
            </div>
        )
    }
}

export default Comment;


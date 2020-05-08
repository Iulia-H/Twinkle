import React from "react"

class Comment extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="comment">
                {this.props.comment.user_id}
                {this.props.comment.body}
            </div>
        )
    }
}

export default Comment;


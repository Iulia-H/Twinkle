import React from "react";
import Comment from "./comment";

class Comments extends React.Component{
    constructor(props){
        super(props);
        this.state = { comments: this.props.getComments(this.props.photo.id)};
        
    }
    
    
    render(){
        const comments = Object.values(this.props.comments);
        return(
            <ul>
                {comments.map(comment => {
                    return <li key={comment.id} >
                        <Comment
                            comment={comment} 
                            deleteComment={this.props.deleteComment} 
                            updateComment={this.props.updateComment} />
                        </li>
                })}
                <div>
                    
                </div>
            </ul>
            
        )
    }
}

export default Comments;
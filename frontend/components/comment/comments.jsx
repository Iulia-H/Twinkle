import React from "react";
import Comment from "./comment";
class Tags extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.getComments();
    }


    render(){
        const comments = Object.values(this.props.comments);
        console.log(comments)
        return(
            <ul>
                {comments.map(comment => {
                    return <li key={comment.id}>
                        <Comment
                            comment={comment} 
                            deleteComment={this.props.deleteComment} 
                            updateComment={this.props.updateComment} />
                        </li>
                })}
            </ul>
            
        )
    }
}

export default Tags;
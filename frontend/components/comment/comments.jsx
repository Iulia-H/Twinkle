import React from "react";
import Comment from "./comment";


class Comments extends React.Component{
    constructor(props){
        super(props);
        
    }
    
    componentWillUnmount(){
        this.props.removeComments();
    }
        
    render(){
        let comments = "";
        comments =  Object.values(this.props.comments);
        return(
            <ul>
                {comments.map(comment => {
                    
                    return <li key={comment.id} >
                        <Comment
                            user = {this.props.user}
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
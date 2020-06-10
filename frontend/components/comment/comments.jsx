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
        // console.log(this.props.comments);
        let comments = "";
        comments =  Object.values(this.props.comments);
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
            // <div>Hello</div>
            
        )
    }
}

export default Comments;
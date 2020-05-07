import React from "react";
import TagFormContainer from "../tag/tag_form_container";
import TagsContainer from "../tag/tags_container";
import CommentsContainer from "../comment/comments_container";
import CommentFormContainer from "../comment/comment_form_container";

class Photo extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.getPhoto(this.props.match.params.id);
    }


    render() {
        return ( 
            <div className="photo" >
                <h1> {this.props.photo.title}</h1>
                <img src={this.props.photo.photoUrl}/>
                <TagFormContainer/>
                <TagsContainer />
                <CommentFormContainer/>
                <CommentsContainer/>
            </div>
        )
    }
}

export default Photo;
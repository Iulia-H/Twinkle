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
        const photo = this.props.photo;
        const comments = this.props.getComments(photo.id);
        const tags = this.props.getTags(photo.id);
        return ( 
            <div className="page-container" >
                <div className="photo-container">
                    <img src={photo.photoUrl}/>
                </div>
                <h1> {photo.title}</h1>
                <div className="elements">
                    <div className="comments">
                        <CommentsContainer comments={comments}/>
                        <CommentFormContainer className="comment-form"/>
                    </div>
                    <div className="tag-container">
                        <TagsContainer tags={tags}/>
                        <TagFormContainer className="tag-form"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Photo;
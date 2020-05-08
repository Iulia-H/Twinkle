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
            <div className="page-container" >
                <div className="photo-container">
                    <img src={this.props.photo.photoUrl}/>
                </div>
                <h1> {this.props.photo.title}</h1>
                <div className="author">
                    {/* {this.props.users.username} */}
                    fghjkl;
                </div>
                <div className="elements">
                    <div className="comments">
                        <CommentsContainer />
                        <CommentFormContainer className="comment-form"/>
                    </div>
                    <div className="tag-container">
                        <TagsContainer />
                        <TagFormContainer className="tag-form"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Photo;
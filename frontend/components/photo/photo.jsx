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
    renderElements(){
        const photo = this.props.photo;
        const comments = this.props.getComments(photo.id);
        const tags = this.props.getTags(photo.id);
        const currentUser = Object.values(this.props.user)[0];
        const user = this.props.photo.user;
        console.log(currentUser);
        return (
            <div className="elements">
                <div className="comments">
                    <CommentsContainer comments={comments} user={user}/>
                    {currentUser ?
                        <div>
                            <CommentFormContainer photoId={photo.id} className="comment-form" />
                        </div>
                        : ""
                    }
                </div>
                <div className="tag-container">
                    <TagsContainer tags={tags} />
                    {(this.props.photo && currentUser &&(user.id === this.props.photo.user_id))?
                        <div>
                            <TagFormContainer photoId={photo.id} className="tag-form" />
                        </div>
                        : ""
                    }
                </div>
            </div>
        )
    }

    componentWillUnmount() {
        this.props.removePhoto();
    }
   
    render() {
        const photo = this.props.photo;
        const comments = this.props.getComments(photo.id);
        const tags = this.props.getTags(photo.id);
        console.log(photo.id);
        return ( 
            <div className="page-container" >
                <div className="photo-container">
                    <img src={photo.photoUrl}/>
                </div>
                <h1> {photo.title}</h1>
                {/* <div>
                    picture uploaded by {photo.id}
                </div> */}
                {photo.id ? this.renderElements() : "" }
            </div>
        )
    }
}

export default Photo;
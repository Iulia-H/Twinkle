import { connect } from "react-redux";
import React from "react";
import { getPhotos } from "../../actions/photos_actions";

const mSTP = ({ entities }) => ({
    photos: entities.photos
});

const mDTP = dispatch => ({
    getPhotos: () => dispatch(getPhotos()),

    // deleteErrors: () => dispatch(deleteErrors())
});


class Photos extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.getPhotos();
    }

    render(){
        const photos = Object.values(this.props.photos)
        return(
            <ul className="photo-list">
                {photos.map(photo =>(
                    <li key={`001/${photo.id}`} className="photo-item"> 
                        <div>
                            <h1></h1>
                            <img src={photo.photoURL} />
                            <h1> {photo.title}</h1>
                        </div>
                    </li>
                ))}
                
            </ul>
        )
    }
    
}

export default connect(mSTP, mDTP)(Photos);
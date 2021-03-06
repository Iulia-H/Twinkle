import { connect } from "react-redux";
import React from "react";
import { getPhotos, removePhotos} from "../../actions/photos_actions";
import {Link } from 'react-router-dom';

const mSTP = ({ entities }) => ({
    photos: entities.photos
});

const mDTP = dispatch => ({
    getPhotos: () => dispatch(getPhotos()),
    removePhotos: () => dispatch(removePhotos())

    // deleteErrors: () => dispatch(deleteErrors())
});


class Photos extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.getPhotos();
        
    }
    componentWillUnmount(){
        this.props.removePhotos();
    }

    render(){
        const photos = Object.values(this.props.photos);
        
        return(
            <div className="photos-container">
                
                <ul className="photo-list">
                    {photos.map(photo =>{
                        if (photo.id){
                            return (
                            <li key={`002/${photo.id}`} className="photo-item" > 
                                <div>
                                    {/* <h1></h1> */}
                                    <Link to={`/photos/${photo.id}`}>
                                    <img src={photo.photoURL} />
                                    </Link>
                                    <h1> {photo.title}</h1>
                                </div>
                            </li>
                            )
                        }
                    })}
                    
                </ul>
            </div>
        )
    }
    
}

export default connect(mSTP, mDTP)(Photos);
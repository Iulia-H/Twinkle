import React from "react";

class Photo extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.getPhoto(this.props.match.params.id);
    }


    render() {
        return ( 
            <div className="photo" >
                <img src={this.props.photo.photoUrl}/>
                <h1> {this.props.photo.title}</h1>
            </div>
        )
    }
}

export default Photo;
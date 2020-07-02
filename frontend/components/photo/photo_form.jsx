import { connect } from "react-redux";
import { createPhoto, deleteErrors } from "../../actions/photos_actions";
import React from "react";


const mSTP = ({ errors, entities }) => ({
    errors: errors,
    photos: entities.photos
});

const mDTP = dispatch => ({
    createPhoto: (photo) => dispatch(createPhoto(photo)),
    deleteErrors: () => dispatch(deleteErrors())
});

class PhotoForm extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            title: "",
            link: null,
            url: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlefFile = this.handlefFile.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        
 
    }

    handleChange(field){
        return (e) => this.setState({[field]: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append("photo[title]", this.state.title);
        formData.append("photo[link]", this.state.link);
        this.props.createPhoto(formData);

        this.setState({
            title: "",
            link: null,
            url: null
        });
        if (this.props.photos.id) {
            console.log(this.props.photos);
            // this.props.history.push(`/photos/${this.props.photos.id}`)
        } 
     
    }


    handlefFile(e){
        e.preventDefault();
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {

            this.setState({link: file, url: fileReader.result});
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    renderErrors() {
        const { errors } = this.props.errors.photo;
        if (errors) {
            return (

                <ul className="error-message">
                    {errors.map((error, i) => {
                        return <li key={i}>{error}</li>
                    })}
                </ul>
            )

        }
    }

    componentWillUnmount() {
        if (this.props.errors) {
            this.props.deleteErrors();    
        }
        console.log("deleted stuff")
    }


    render(){
        const preview = this.state.url? <img src={this.state.url}/> : null;
        if (this.props.photos.id) {
            console.log(this.props.photos);
            // this.props.history.push(`/photos/${this.props.photos.id}`)
        } 
       
        return(
            <div className="upload-box">
                <h1>Upload Photo</h1>
                <form onSubmit={this.handleSubmit} className="upload-form">
                    <input 
                        type="text" 
                        value={this.state.title} 
                        onChange={this.handleChange("title")} 
                        placeholder="Photo title"/>
                    <br/>
                    <div className="image-preview">
                        {preview}
                    </div>
                    <label className="upload">
                        Upload file
                        <input type="file" onChange={this.handlefFile} /> 
                    </label>
                    <br/>
                    <button type="submit">Upload Photo</button>
                </form>
                <div>
                    {this.renderErrors()}
                </div>
            </div>

        )
    }


}



export default connect(mSTP, mDTP)(PhotoForm);




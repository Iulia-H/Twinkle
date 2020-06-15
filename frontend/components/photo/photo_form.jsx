import { connect } from "react-redux";
import { createPhoto } from "../../actions/photos_actions";
import React from "react";


const mSTP = ({ errors }) => ({
    errors: errors
});

const mDTP = dispatch => ({
    createPhoto: (photo) => dispatch(createPhoto(photo))
    // deleteErrors: () => dispatch(deleteErrors())
});

class PhotoForm extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            title: "",
            link: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlefFile = this.handlefFile.bind(this);
 
    }

    handleChange(field){
        return (e) => this.setState({[field]: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append("photo[title]", this.state.title);
        formData.append("photo[link]", this.state.link);
    
        // console.log(formData);
        this.props.createPhoto(formData);
        this.setState({
            title: "",
            link: null
        });
    }

    handlefFile(e){
        // debugger
        e.preventDefault();
        this.setState({link: e.currentTarget.files[0]});
    }

    render(){
        // console.log(this.state);
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
                    <label className="upload">
                        Upload file
                        <input type="file" onChange={this.handlefFile} /> 
                    </label>
                    <br/>
                    <button type="submit">Upload Photo</button>
                </form>
            </div>

        )
    }


}



export default connect(mSTP, mDTP)(PhotoForm);




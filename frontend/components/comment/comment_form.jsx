import React from "react";

import { Link } from 'react-router-dom';


class CommentForm extends React.Component{
    constructor(props){
        super(props);
        this.state =  {
            body: "",
            photo_id: this.props.photoId
            };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log(this.props.photoId);
        // this.renderErrors = this.renderErrors.bind(this);
        
    }
    
    handleChange(field){
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.values(this.props.currentUser);
        if (user.id){
            console.log(this.props.currentUser)
            const id = this.props.photoId;
            this.setState({ photo_id: id });
            this.props.createComment(this.state);
            this.props.deleteErrors();
            this.setState({body:"", photo_id: this.props.photoId});
            
        }else{
            this.props.history.push('/login');
        }
    }

    componentWillUnmount() {
        if (this.props.errors) {
            this.props.deleteErrors();
        }
    }

    renderErrors() {
        const errors = this.props.errors;
        if (errors && errors.length > 0 ) {
            return (
                <ul className="error-messagesss">
                    {this.props.errors.map((error, i) => {
                        return <li key={i}>{error}</li>
                    })}
                </ul>
            )

        }
    }


    render(){
        return(
                
            <form onSubmit={this.handleSubmit} className="comment-form">
                <textarea
                value={this.state.body} 
                onChange={this.handleChange("body")}
                placeholder="Add a comment"/>
                {/* <div className="error-container"> */}
                    {this.renderErrors()}
                {/* </div> */}
                <button type="submit">Submit</button>
            </form>
              
        )
        
    }

}


export default CommentForm;
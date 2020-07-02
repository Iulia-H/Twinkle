import React from "react";

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
        const id = this.props.photoId;
        this.setState({ photo_id: id });
        this.props.createComment(this.state);
        this.props.deleteErrors();
        this.setState({body:"", photo_id: this.props.photoId});
        
    }

    componentWillUnmount() {
        if (this.props.errors) {
            this.props.deleteErrors();
        }
    }

    renderErrors() {
        const errors = this.props.errors;
        console.log(errors);
        if (this.props.errors) {
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
            <div>
                <div>
                    {this.renderErrors()}
                </div>
                <form onSubmit={this.handleSubmit} className="comment-form">
                    <textarea
                    value={this.state.body} 
                    onChange={this.handleChange("body")}
                    placeholder="Comment"/>
                    <button type="submit">Submit</button>
                </form>
              
            </div>
        )
        
    }

}


export default CommentForm;
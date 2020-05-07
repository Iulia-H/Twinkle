import React from "react";

class CommentForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.comment;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(field){
        return (e) => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createComment(this.state);
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    value={this.state.body} 
                    onChange={this.handleChange("body")}
                    placeholder="Comment"/>
                    <input 
                    type="text" 
                    value={this.state.photo_id} 
                    onChange={this.handleChange("photo_id")}
                    placeholder="photoid"/>
                    <input
                        type="text"
                        value={this.state.user_id}
                        onChange={this.handleChange("user_id")}
                        placeholder="userid" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
        
    }

}


export default CommentForm;
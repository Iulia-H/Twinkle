import React from "react";

class CommentForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.comment;
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(field){
        return (e) => {
            this.setState({ [field]: e.target.value });
            const id = this.props.photo.id;
            this.setState({photo_id: id});
        };
    }

    handleSubmit(e){
        e.preventDefault();
        // console.log(id);
        console.log(this.state);
        this.props.createComment(this.state);
        this.setState({body:"", photo_id:""});
    }


    render(){
        return(
            <div>
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
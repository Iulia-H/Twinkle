import React from "react";

class CommentForm extends React.Component{
    constructor(props){
        super(props);
        this.state =  {
            body: "",
            photo_id: this.props.photoId
            },
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log(this.props.photoId);
        
    }
    
    handleChange(field){
        return (e) => {
            this.setState({ [field]: e.target.value });
            
            // e.preventDefault();
           
        };
    }

    handleSubmit(e){
        e.preventDefault();
        const id = this.props.photoId;
        this.setState({ photo_id: id });
        this.props.createComment(this.state);
        this.setState({body:"", photo_id: this.props.photoId});
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
import React from "react";

class TagForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.tag;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(field){
        return (e) => {
            this.setState({ [field]: e.target.value });
            const id = this.props.photo.id;
            this.setState({ photo_id: id });
        };
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createTag(this.state);
        this.setState({ body: "", photo_id: "" });
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    value={this.state.body} 
                    onChange={this.handleChange("body")}
                    placeholder="Tag Name"/>
                    <br/>
                    {/* <input 
                    type="text" 
                    value={this.state.photo_id} 
                    onChange={this.handleChange("photo_id")}
                    placeholder="id"/> */}
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
        
    }

}


export default TagForm;
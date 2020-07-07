import React from "react";

class TagForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            body: "",
            photo_id: this.props.photoId
        };

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
        this.setState({ body: ""});
        this.props.deleteErrors();
    }

    componentWillUnmount() {
        if (this.props.errors) {
            this.props.deleteErrors();
        }
    }

    renderErrors() {
        const errors  = this.props.errors;
        if (errors) {
            return (

                <ul className="error-messages">
                    {errors.map((error, i) => {
                        return <li key={i}>{error}</li>
                    })}
                </ul>
            )

        }
    }


    render(){
        console.log(this.props.errors)
        return(
            <div>
                <div>
                    {this.renderErrors()}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    value={this.state.body} 
                    onChange={this.handleChange("body")}
                    placeholder="Add a tag"/>
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
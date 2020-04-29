import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.resetPassword = this.resetPassword.bind(this);
    }

    update(field){
        return (e) => this.setState({[field]: e.target.value});
    }

    resetPassword(){
        this.setState({password: ""});
    }

    handleSubmit(e) {
        e.preventDefault();
        //const { action } = this.props;
        const user = Object.assign(this.state);
        console.log(user);

        // console.log(action.type);
        // console.log(this.props);
        this.props.action(user);
    
        //this.resetPassword();
    }
    
    componentWillUnmount(){
        this.props.deleteErrors();
    }

    renderErrors(){
        const { errors } = this.props.errors;
        //console.log(errors);
        if (errors) {
            return(
               <ul className="error-list">
                   {errors.map((error, i) =>{
                       return <li key={i}>{error}</li>
                   })}
               </ul>
            )

        }
    }

    render() {
        const signup = <Link to="/signup"></Link>
        const login = <Link to="/login"></Link>
        return (
           <div>
                <h3>{this.props.formType}</h3>
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit} >
                    <label>
                        Username
                        <input type="text"
                        value={this.state.username}
                        onChange={this.update("username")}/>
                    </label>
                    <label>
                        Password
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update("password")} />
                    </label>
                    <button type= "submit" value={this.props.formType}>{this.props.formType}</button>
                </form>
                {this.props.formType === "Sign Up!"? login : signup}
           </div>
        )
    }


}

export default SessionForm;
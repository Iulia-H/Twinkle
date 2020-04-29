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
        this.resetPassword = this.resetPassword.bind(this);
    }

    update(field){
        return (e) => this.setState({[field]: e.target.value});
    }

    resetPassword(){
        this.setState({password: ""});
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign(this.state);
        this.props.action(user);
        this.resetPassword();
    }
    
    componentWillUnmount(){
        this.props.deleteErrors();
    }

    renderErrors(){
        const { errors } = this.props.errors;
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
        const signup = <Link to="/signup">Sign up</Link>
        const login = <Link to="/login">Log in</Link>
        return (
           <div className="session-container">
                <h3>{this.props.formType}</h3>
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit} className= "form">
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
                <div className="other-link">Alternatively please 
                    {this.props.formType === "Sign Up!" ? login : signup}
                </div>
           </div>
        )
    }


}

export default SessionForm;
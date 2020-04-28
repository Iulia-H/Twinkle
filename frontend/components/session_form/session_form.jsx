import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return (e) => this.setState({[field]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }
    
    renderErrors(){
        return(
           <ul>
               {this.props.errors.map(error, i =>{
                   return <li key={i}>{error}</li>
               })}
           </ul>
        )
    }

    render() {
        const signup = <Link to="/signup"></Link>
        const login = <Link to="/login"></Link>
        return (
           <div>
                <h3>{this.props.formType}</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username
                        <input type="text"
                        value={this.state.username}
                        onChange={this.update("username")}/>
                    </label>
                    <label>
                        Password
                        <input type="password"
                            value={this.state.passowrd}
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
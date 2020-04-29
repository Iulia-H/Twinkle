import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component{
    constructor(props){
        super(props);

    }

    welcomeMessage(){
      return(
        <div className="message-container">
          <p className="welcome-message"> Welcome {this.props.currentUser.username}!</p>
          <button onClick={this.props.logout}>Log Out!</button>
          {/* <button onClick={this.props.deleteAccount}>Delete Account</button> */}
        </div>
      )
    }

    handleClick(e){
      e.preventDefault();
      e.currentTarget.style.visibility = 'hidden'
    }


    buttons(){
      
      return(
        <ul className="buttons" onClick={this.handleClick}>
          <button ><Link to="/login">Login</Link></button>
          <button ><Link to="/signup">Sign up!</Link></button>
        </ul>
      )
    }

    render(){
       return(
          <div className="nav-bar">
            <h1 className="title">Twinkle</h1>
              <div >
              {this.props.currentUser ? 
              (this.welcomeMessage()
              ):
               (this.buttons()
              )}
            </div>
          </div>
       )
    }
    
};

export default NavBar;

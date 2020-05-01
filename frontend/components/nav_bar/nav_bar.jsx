import React from "react";
import { Link , withRouter, NavLink} from "react-router-dom";


class NavBar extends React.Component{
    constructor(props){
        super(props);

    }

    welcomeMessage(){
      return(
        <div className="message-container">
          <p className="welcome-message"> Welcome {this.props.currentUser.username}!</p>
          <button onClick={this.props.logout} className="logout">Log Out!</button>
          {/* <button onClick={this.props.deleteAccount}>Delete Account</button> */}
        </div>
      )
    }

    buttons(){
      
      return(
        <div className="buttons" >
          <NavLink to="/login" className="login">Login</NavLink>
          <NavLink to="/signup" className="signup">Sign up!</NavLink>
        </div>
      )
    }
    redirect(e){
      e.preventDefault();
    }

    render(){
      let buttons;
      if (this.props.location.pathname === "/login" || this.props.location.pathname === "/signup" ){
        buttons = null
      }else{
        buttons = this.buttons()
      }
       return(
          <div className="nav-bar">
           <Link to="/" className="title">Twinkle</Link>
              <div >
              {this.props.currentUser ? 
              (this.welcomeMessage()
              ):
               buttons
              }
            </div>
          </div>
       )
    }
    
};

export default withRouter(NavBar);

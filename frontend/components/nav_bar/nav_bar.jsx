import React from "react";
import { Link , withRouter, NavLink} from "react-router-dom";


class NavBar extends React.Component{
    constructor(props){
        super(props);

    }

    welcomeMessage(){
      return(
        <div className="buttons-for">
            <Link to="/photo/new" className="material-icons">backup</Link>
          <div className="message-container">
            <p className="welcome-message"> Welcome {this.props.currentUser.username}!</p>
            <button onClick={this.props.logout} className="logout">Log Out!</button>
            {/* <button onClick={this.props.deleteAccount}>Delete Account</button> */}
          </div>
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
            <div>
           <Link to="/" className="title">Twinkle</Link>
           <Link to="/photos" className="photos-page">Photos</Link>
            </div>
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

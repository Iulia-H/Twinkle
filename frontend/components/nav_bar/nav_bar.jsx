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
          <button onClick={this.props.logout}>Log Out!</button>
          {/* <button onClick={this.props.deleteAccount}>Delete Account</button> */}
        </div>
      )
    }

    buttons(){
      
      return(
        <ul className="buttons"  >
          <button ><NavLink to="/login" className="button">Login</NavLink></button>
          <button ><NavLink to="/signup" className="button">Sign up!</NavLink></button>
        </ul>
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
              };
            </div>
          </div>
       )
    }
    
};

export default withRouter(NavBar);

import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
      
       return(
          <div className="nav-bar">
            <h1 className="title">Twinkle</h1>
              <div >
              {this.props.currentUser ? 
              (<div>
              <p className="welcome-message"> Welcome {this.props.currentUser.username}!</p>
              <button onClick={this.props.logout}>Log Out!</button>
                </div>
              ):
               (<ul className="buttons">
                 <button><Link to="/login">Login</Link></button>
                 <button><Link to="/signup">Sign up!</Link></button>
                </ul>
              )}
           </div>
          </div>
       )
    }
    
};

export default NavBar;

{/* <button onClick={this.props.deleteAccount}>Delete Account</button> */ }
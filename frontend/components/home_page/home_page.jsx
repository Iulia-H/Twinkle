import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component{
    constructor(props){
        super(props);
       
    }
    render(){
        return(
            <div className="home-page">
                <img src={window.background} className="background"/>
                <div className="home-text">
                    <h1 className="introduction">Spark your inspiration</h1>
                    <br/>
                    <h3>Join the Twinkle community and start 
                        <br/>
                        lighting up your feed with millions of photos</h3>
                    <br/>
                    <Link to="/signup" className="redirect">Start for free</Link>    
                </div>
            </div>
        )

    }
}

export default HomePage;
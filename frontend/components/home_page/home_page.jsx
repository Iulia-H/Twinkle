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
                    <h3>Join the Twinkle community and start lighting up your feed.</h3>
                    <button><Link to="/signup">Start for free</Link></button>
                </div>
            </div>
        )

    }
}

export default HomePage;
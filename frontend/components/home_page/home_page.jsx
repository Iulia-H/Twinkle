import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component{
    constructor(props){
        super(props);
       
    }

    imageChange(){

        return(
            <div className="image-container">
                <figure >
                    <img src={window.img2} className="background" />
                    <figcaption>{window.caption2}</figcaption>
                </figure>
                <figure >
                    <img src={window.img2} className="background" />
                    <figcaption>{window.caption2}</figcaption>
                </figure>
                <figure >
                    <img src={window.img1} className="background" />
                    <figcaption>{window.caption1}</figcaption>
                </figure>
            </div>
        )
    }


    render(){
        return(
            <div className="home-page">
                    <figure >
                        <img src={window.img2} className="background"/>
                        <figcaption>{window.caption2}</figcaption>
                    </figure>
                {/* {this.imageChange()} */}
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
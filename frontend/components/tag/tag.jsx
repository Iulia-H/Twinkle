import React from "react"

class Tag extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="tag" >
            {this.props.tag.body}
        </div>
        )
    }
}

export default Tag


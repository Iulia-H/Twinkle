import React from "react"

class Tag extends React.Component{
    constructor(props){
        super(props);
    }
    deleteButton(){

    }
    updateButton(){

    }

    render(){
        return(
         <div className="tag" >
            {this.props.tag.body}
            {/* <button></button> */}
        </div>
        )
    }
}

export default Tag


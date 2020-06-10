import React from "react";
import Tag from "./tag";

class Tags extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillUnmount() {
        this.props.removeTags();
    }

    render(){
        const tags = Object.values(this.props.tags);
        console.log(tags);
        return(
            <ul className="tags"> 
                {tags.map(tag => {
                    return <li key={`003/${tag.id}`} >
                        <Tag 
                            tag={tag} 
                            deleteTag={this.props.deleteTag} 
                            updateTag={this.props.updateTag} />
                        </li>
                })}
            </ul>
            
        )
    }
}

export default Tags;
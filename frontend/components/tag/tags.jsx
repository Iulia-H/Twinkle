import React from "react";
import Tag from "./tag";
class Tags extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.getTags();
    }


    render(){
        const tags = Object.values(this.props.tags);
        return(
            <ul>
                {tags.map(tag => {
                    return <li key={tag.id}>
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
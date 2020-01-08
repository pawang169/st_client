import React, { Component } from "react"
import { Link } from "react-router-dom";

class ListTemplate extends Component{
    constructor(props)
    {
        super(props);
    }

    list()
    {
        let data = [
            {templateId:1 , templateName: 'Week-1' , templateTitle : "Spirit of Giving"},
            {templateId:2 , templateName: 'Week-2' , templateTitle : "Meditate plenty"},
            {templateId:3 , templateName: 'Week-3' , templateTitle : "Spiritiuality "},
            {templateId:4 , templateName: 'Week-4' , templateTitle : "Spirit of Sprituality"},
            {templateId:5 , templateName: 'Week-5' , templateTitle : "Giving"}
        ]
    return <ul>{data.map(function(rec){ let a = "/week/" + rec.templateId  ; return <li key={rec.templateId}><Link  to={a} >Week : {rec.templateId} Title {rec.templateTitle}</Link></li>})}</ul>;
    }
     
    render(){ 
        return(   
            <div>{this.list()}</div>                          
        );
    }

}

export default ListTemplate;

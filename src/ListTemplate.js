import React, { Component } from "react"
import { Link } from "react-router-dom";

class ListTemplate extends Component{    
    constructor()
    {
        super();
        this.state = {
            data:[]
        }
        let data = [1,2,3,4,5];
        data.map(rec=> rec)

    }   
     
    componentDidMount(){
        fetch("http://localhost:5000/ListThemes")
        .then(results => results.json()) // do we need to return or data returns automatically?
        .then(templates => {
            this.setState({data: templates});
            console.log('here is the data ' + this.state.data)
        })
    }

    render(){ 
        return(
                <div>
                    <h1> List of data </h1>
                     {this.state.data.map(rec => {
                         let a = "/week/" + rec.templateId;                        
                        return (
                                <li key={rec.templateId}><Link  to={a} >{rec.templateName} Title {rec.templateTitle}</Link></li>               
                            )
                     })}
                </div>);
    }

}

export default ListTemplate;

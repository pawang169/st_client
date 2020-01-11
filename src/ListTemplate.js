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
        const gotRecords = this.state.data.length >0 ? true:false;
        let screenRender = <h1 className="center-align">No record found !!</h1>
        if(gotRecords)
        {
           screenRender= <div>
                            <h4 className="collection-header">Weekly Themes for Year 2020</h4>   
                            <table className="highlight">
                                <thead>
                                <tr>
                                    <th>Week</th>
                                    <th>Theme</th>      
                                </tr>
                                </thead>

                                <tbody>
                                {this.state.data.map(rec => {
                                 let a = "/week/" + rec.templateId;                        
                                 return (
                                        <tr key={rec.templateId}>
                                            <td>{rec.templateName}</td>
                                            <td><Link  to={a} >{rec.templateTitle}</Link></td>    
                                        </tr> 
                                        )
                                })}
                                </tbody>
                            </table>
                        </div>
        } 

        return(
                    <div>
                        {screenRender}
                    </div>);
    }

}
export default ListTemplate; 
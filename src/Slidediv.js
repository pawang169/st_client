import React, { Component } from 'react';
import { render } from 'react-dom';

class Slidediv extends Component{    
    constructor(props)
    {
        super(props);
    }  

    render(){        
        return (
            <div style = {this.props.divStyle}>
                <h1>{this.props.heading}</h1>                    
                <h6>{this.props.speaker}</h6>
            </div>
        )
    }
}

     

export default Slidediv;
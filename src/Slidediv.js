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
                <h1>Heading of the slide {this.props.heading}</h1>                    
                <h6>speaker of the slide {this.props.speaker}</h6>
            </div>
        )
    }
}

     

export default Slidediv;
import React, { Component } from 'react';
import Slidediv from './Slidediv';
import Videodiv from './Videodiv';
class Week extends Component {   
    state = {
        count:0,
        data:[]
    }
     countChange(){ 
         console.log(this.state.count + ">" + this.state.data.length)
         if(this.state.count>=this.state.data.length-1){
            console.log("reset")
            this.setState({ count: 0 })     
         }
            
         else
            this.setState({ count: this.state.count + 1 }) 
    }
    
    componentDidMount(){
        const { text, match: { params } } = this.props;
        const { id } = params;
        console.log("match " + this.props)
        let url = "http://localhost:5000/ListWeek/"+id; 
        fetch(url)
        .then(results=>{
            return results.json();
        })
        .then(res=>{
            //console.log(res);
            this.setState({data:res})
        })
    }
    render(){
        let cntrl = "";
        let styles = {
                display: "block",
                width: "100%",
                height: "800px",
                padding: "5px",
                border: "1px solid blue",
                "text-align": "center"
          };
          
            let sectionData = this.state.data.find(rec=> {
                console.log(rec.sectionId);
                if (rec.sectionId==this.state.count+1) {
                    if(rec.sectionType=="div")  {
                            cntrl = <Slidediv divStyle={styles}  id={this.state.count} 
                            speaker={rec.speaker} 
                            heading={rec.heading} />    
                    }                
                    else{
                            let vUrl = rec.videoURL;
                            if(rec.videoStart+rec.videoEnd>0)
                                vUrl = rec.videoURL + "#t=" + rec.videoStart + ',' + rec.videoEnd;
                            cntrl = <Videodiv style={styles} id={this.state.count} 
                            videoURL={vUrl} 
                            />
                        }
                }
                    console.log("rec value : "+  rec.toString() );
            });
         
        return (
        <div id="mainDiv">
                  
            {/* <h1>Slide Number : {this.state.count}</h1>             */}
            <button id="btn" onClick={()=>{this.countChange()}}>Next Slide</button> 
            <hr />
            {cntrl}  
            
            
              
        </div>
        )
        
    }   

}
export default Week;




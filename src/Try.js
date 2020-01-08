import React from "react";
import Slidediv from './Slidediv';
import Videodiv from './Videodiv';
 export default class Greeting extends React.Component {
    state = {
        count:0
    }
    countChange(id){
        alert(id); 
        this.setState({ count: this.state.count + 1 }) 
   }
 render() {
     debugger;
     console.log(this.props)
 const { text, match: { params } } = this.props;
 
 const { id } = params;
            let sectionData = [
                {speaker:'pawan1',heading:'h1',sectionType:'div'},
                {speaker:'pawan2',heading:'h2',sectionType:'vid',videoStart:10,videoEnd:20,videoURL:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'},
                {speaker:'pawan3',heading:'h3',sectionType:'div'},
                {speaker:'pawan4',heading:'h4',sectionType:'vid',videoStart:0,videoEnd:0,videoURL:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'},
            ];
            let cntrl = "";
                        if(sectionData[this.state.count].sectionType=="div")  {
                                cntrl = <Slidediv   id={this.state.count} 
                                speaker={sectionData[this.state.count].speaker} 
                                heading={sectionData[this.state.count].heading} />    
                        }                
                        else{
                                let vUrl = sectionData[this.state.count].videoURL;
                                if(sectionData[this.state.count].videoStart+sectionData[this.state.count].videoEnd>0)
                                    vUrl = sectionData[this.state.count].videoURL + "#t=" + sectionData[this.state.count].videoStart + ',' + sectionData[this.state.count].videoEnd;
                                cntrl = <Videodiv   id={this.state.count} 
                                videoURL={vUrl} 
                                />
                            }
                            return (
                                <div id="mainDiv" >
                                    <button id="btn" onClick={()=>{this.countChange(id)}}>Click Me</button>        
                                    <h1>Slide Number : {this.state.count}</h1>
                                    {cntrl}         
                                            
                                </div>
                                )
 }
}
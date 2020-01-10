import React, { Component } from 'react';
import Slidediv from './Slidediv';
import Videodiv from './Videodiv';
class Week extends Component {   
    state = {
        count:0,
        data:[]
    }
     countChange(){ 
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
        let styles = {
            margin: '20px',
            width: '100%',
            height: '100%',
            align: "center",
            backgroundColor: '#9aeaea',
          };
            // const { text, match: { params } } = this.props;
            // const { id } = params;
            // console.log("match " + this.props)
            // let sectionData = [
            //                     {speaker:'',heading:'Welcome',sectionType:'div'},
            //                     {speaker:'pawan1',heading:'h1',sectionType:'div'},
            //                     {speaker:'pawan2',heading:'h2',sectionType:'vid',videoStart:10,videoEnd:20,videoURL:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'},
            //                     {speaker:'pawan3',heading:'h3',sectionType:'div'},
            //                     {speaker:'pawan4',heading:'h4',sectionType:'vid',videoStart:0,videoEnd:0,videoURL:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'},
            //                 ];
            let sectionData = this.state.data.find(rec=> {
                console.log(rec.sectionId);
                if (rec.sectionId==this.state.count+1) 
                    return rec;
            });
            console.log(sectionData.sectionType)
            // let rec = sectionData[0];
          //  console.log("sectionData" + "Count " +this.state.count + " value " +  sectionData.speaker );
            let cntrl = "";
            // if(sectionData[this.state.count].sectionType=="div")  {
            //         cntrl = <Slidediv divStyle={styles}  id={this.state.count} 
            //         speaker={sectionData[this.state.count].speaker} 
            //         heading={sectionData[this.state.count].heading} />    
            // }                
            // else{
            //         let vUrl = sectionData[this.state.count].videoURL;
            //         if(sectionData[this.state.count].videoStart+sectionData[this.state.count].videoEnd>0)
            //             vUrl = sectionData[this.state.count].videoURL + "#t=" + sectionData[this.state.count].videoStart + ',' + sectionData[this.state.count].videoEnd;
            //         cntrl = <Videodiv   id={this.state.count} 
            //         videoURL={vUrl} 
            //         />
            //     }

        return (
        <div id="mainDiv" >
            <button id="btn" onClick={()=>{this.countChange()}}>Click Me</button>        
            <h1>Slide Number : {this.state.count}</h1>
            
            {/* {cntrl}          */}
              Hello      
        </div>
        )
        
    }   

}
export default Week;
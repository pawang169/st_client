import React, { Component } from "react";
 
class Videodiv extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div>
                <video width="90%" controls>
                    <source src={this.props.videoURL} type="video/mp4" />
                </video>             
            </div>
        )
    }
}


// function Videodiv(){
//     var divStyle = {
//         'borderStyle': 'dotted',
//          'width':'100%',
//          'height':'100%',
//          'display': 'none'
//         //color: 'white',
//         // backgroundImage: 'url(' + imgUrl + ')',
//         // WebkitTransition: 'all', // note the capital 'W' here
//         // msTransition: 'all' // 'ms' is the only lowercase vendor prefix
//       };
//     const videoURL = "https://gcs-vimeo.akamaized.net/exp=1578098442~acl=%2A%2F1603090884.mp4%2A~hmac=5abeb1c3931d3b02bffcd56020d80198a0a7d28936a7e5218a69afd0089db03f/vimeo-prod-skyfire-std-us/01/1411/15/382058656/1603090884.mp4#t=10,20";
        
//     //https://stackoverflow.com/questions/5981427/start-html5-video-at-a-particular-position-when-loading
//     //ust add #t=[(start_time), (end_time)] to the end of your media URL.
//     //want to see it that way) is you'll need to know how long your video is to indicate the end time.
//     //#t=10,20 in this 10 is start second , 20 is end second in whole video 
//     return (
//         <div style={divStyle}>
//              <video width="90%" controls>
//                 <source src={videoURL} type="video/mp4" />
//              </video>             
//         </div>
//     )
// }

export default Videodiv;
import React from "react";
import "./style.css";

// Look at 7/13/19 27-Ins_BasicState, Counter.js //

function ImageCard (props) { 
 /*  <div className="img-container">
     </div> */
   
// should the key be an id? Probably.
// the onclick is wrong here.
  return (
    <div className="card">
     
        <img className="image" 
        
        key={props.image.id} 
        src={props.image.src} 
        alt={props.image.name} 
        onClick={() => props.handleClick(props.image.id)}/>
     
    </div>
             
  )


}

export default ImageCard;

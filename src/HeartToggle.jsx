import React from "react";
import heartEmpty from "./assets/heart-empty.png";
import heartFull from "./assets/heart.png";

const HeartToggle = ({ favouriteImage, toggleHeart }) => {
    

    return (
      <img src={favouriteImage ? heartFull : heartEmpty} width="30" height="30" 
      onClick = {(e) => {
        e.stopPropagation();
        
        toggleHeart();}}></img>
    )
  }

export default HeartToggle;
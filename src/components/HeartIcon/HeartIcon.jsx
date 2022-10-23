import Heart from "../../recipesimages/heart.svg"
import Saved from "../../recipesimages/saved.svg"
import React, {useState} from 'react';
import "./HeartIcon.css"

export default function HeartIcon() {


    const [isChecked, setIsChecked] = useState(false);
  
    const toggleCheck = () => {
      setIsChecked(!isChecked);
    }
  
    const checkbox = isChecked ? Saved : Heart;
  

  return (
    <div className="HeartIcon" onClick={toggleCheck}>
      <img src={checkbox} alt="heart"/>
    </div>
  );
}
import React from "react";

export default function Phonetic(props){
    console.log(props.phonetic);
    
        if (props.phonetic.audio){
            return (
                <div className="Phonetic">
                    <a href={props.phonetic.audio} target="_blank" rel="noreferrer" >
                        Listen
                    </a> 
                    <h3>{props.phonetic.text}</h3>
               </div> 
            );       
        }
        return (
        <h3>{props.phonetic.text}</h3>
        );
    
    
}
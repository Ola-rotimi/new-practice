import React from "react";
import Entry from "./Entry";

function CreateEntry(props){
    return <Entry 
    key= {props.id}
    imgURL= {props.imgURL}
    brand= {props.brand}
    model= {props.model}
    year= {props.year}
    />
}

export default CreateEntry;
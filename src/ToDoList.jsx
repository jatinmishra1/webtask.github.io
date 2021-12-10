import React from "react"

const ToDoList=(props)=>{
    
    return(
    <>
    <i onClick={()=>{
        props.onSelect(props.id)
    }}>X</i>
        <li>{props.text}</li>
    </>
    )
}
export default ToDoList;

import React,{useState} from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';

const Createnote=(props)=>{
    const [note,setnote]=useState({
        titile:'',
        content:''
    })
    const addEvent=()=>{
        props.passnote(note);
        setnote({
            title:'',
            content:''
        })
    }
    const inputEvent=(event)=>{
        const value=event.target.value 
        const name=event.target.name 

        setnote((prevdata)=>{
            return{
                ...prevdata,
                [name]:value,
            }
        })
    }
return(
    <>
    <div className="main_note">
<form action="">
    <input type="text" placeholder="title"  onChange={inputEvent} value={note.title} name="title" />
    <textarea name="" id="" cols="30" rows="10" name="content" placeholder="write a note here...." onChange={inputEvent} value={note.content}></textarea>
    <Button variant="outlined" onClick={addEvent}><AddCircleIcon/></Button>
</form>
    </div>
    </>
)
}

export default Createnote;
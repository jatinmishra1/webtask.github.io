import React,{useState} from "react";
import Header from './Header'
import Footer from './Footer'
import CreateNote from './Createnote'
import Note from './Note'
const App=()=>{
    const [additem,setadditem]=useState([])

    const addnote=(note)=>{
// alert("i am clicked");
setadditem((prevdata)=>{
    return[...prevdata,note]
})
console.log(note);
    }

    const ondelete=(id)=>{

        setadditem((olddata)=>{
            olddata.filter((currdata,index)=>{
                return(
                        index!==id
                )
            })
        })
    }

    return(
        <>
       <Header/>
       <CreateNote passnote={addnote}/>
       
       { additem.map((val,index)=>{
            return(
            
                <Note
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteitem={ondelete}
                />
                )
            
        })}




       <Footer/>
        </>
    )
}

export default App; 

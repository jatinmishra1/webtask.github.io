import React,{useState} from "react"
import ToDoList from "./ToDoList";


const App=()=>{
    const [inputList,setInputList]=useState()
    const [listItems,setListItems]=useState([]);
    const getItem=(event)=>{
        setInputList(event.target.value)
    }
    const setItem=()=>{
        setListItems((olditems)=>{
            return[...olditems,inputList]
        })
        setInputList("");
    }
    const deleteItem=(id)=>{
        console.log("deleted")
        setListItems((olditems)=>{
            return (olditems.filter((arrElem,index)=>{
                return(
                        index!==id
                )
            }))
        })
    }
    return (
    <>
    <div>
            <h1>to do list</h1>
            <input type="text" value={inputList} placeholder="add_items" onChange={getItem} />
            <button onClick={setItem}>+</button>
            <ol>
               { listItems.map((itemval,index)=>{
                   return(
                            <ToDoList  key={index} id={index} text={itemval} onSelect={deleteItem}/>
                   )
                        
                })}
            </ol>
    </div>
    </>
    )
}

   export default App;
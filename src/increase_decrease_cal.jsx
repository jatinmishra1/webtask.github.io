import React,{useState} from "react"



const App=()=>{

    const number=0;
    const [incNum ,setIncNum]=useState(number);

    const operate=()=>{
        // console.log(incNum)
        setIncNum(incNum+1);
        
    }
    const operateSub=()=>{
        // console.log(incNum)
        if(incNum>0){
            setIncNum(incNum-1)
        }
        else{
            alert("it cant be done")
        }
        
        
    }
    const changenum=(event)=>{
console.log(event.target.value)
    }
    return(

        <>
        <div>
            <input type="text" name="" id="" value={incNum} />
            <button onClick={operate} onChange={changenum}>add</button>
            <button onClick={operateSub}  onChange={changenum}>subtract</button>
        </div>
        </>

    )
   
    
}

   export default App;
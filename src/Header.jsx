import React from "react";
import logo from  './images/bc415218b936471fb27f4d54a9dc862b.png'
import './index.css'



const Header=()=>{
    
    return(
        <>
       <div className="header">
           <img src={logo} alt="logo" width="180" height="100" />
           <h1>JATIN keep</h1>
       </div>
        </>
    )
}

export default Header; 
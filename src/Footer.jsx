import React from "react";

import './index.css'

const Footer=()=>{
    const year=new Date().getFullYear();
    
    return(
        <>
       <div className="Footer">
           <footer><p>copywright © {year}</p></footer>
           
       </div>
        </>
    )
}

export default Footer;
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Routes ,Route,Navigate } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Navbar from './Navbar'
import Foot from './Foot'

const App=()=>{


return(
    <>
    <Navbar/>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/services" element={<Services/>}/>
        <Route render={() => <Navigate to="/" />} />
    </Routes>
    <Foot/>
    </>
)

}

export default App;


import React from 'react'
import web from '../src/images/1.jpg'
import {NavLink} from 'react-router-dom'
import Common from './Common';

const Home=()=>{


return(
    <>
  <Common name="Growth your business with"
    imgsrc={web}
    visit='/services'
    btnname='Get Started'
    />
    </>
)

}

export default Home;
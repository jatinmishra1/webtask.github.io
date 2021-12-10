import React from 'react'
import web from '../src/images/1.jpg'
import {NavLink} from 'react-router-dom'

const Common=(props)=>{


return(
    <>
  <section id='header' className='d-flex align-items-center mt-5'>
  <div className='container'>
      <div className='row'>
      <div className='col-ms-10'>
    <div className='row'>
        <div className='col-md-6 mt-5 pt-5 pt-lg-0 order-2 order-lg-1'>
            <h1>
                {props.name}
                <strong className='brand-name'> JatinMishra</strong>
            </h1>
            <h2 className='my-3'>
                we are the team of talented developers making the website
            </h2>
            <div className='mt-3'>
                <NavLink to={props.visit} className=' btn btn-primary rounded-pill shadow '>
                {props.btnname}
                </NavLink>
            </div>
        </div>
        <div className='col lg -6 order-1 order-lg-2 shadow'>
            <img src={props.imgsrc} alt="atlter" className="img-fluid animated header_img" />
        </div>

    </div>

      </div>
      </div>
      </div>


  </section>
    </>
)

}

export default Common;
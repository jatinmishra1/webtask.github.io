import React,{useState} from 'react'

const Contact=()=>{

    const [data,setdata]=useState({
        fullname:'',
        phonenumber:'',
        email:'',
        message:''
    })

    const inputEvent=(event)=>{
        const {name,value}=event.target
        setdata((prevdata)=>{
            return{
                ...prevdata,
                [name]:value
            }
        })
        console.log(event.target.value)
    }

    const formsubmit=(e)=>{
        e.preventDefault();
        alert(`${data.fullname} ,your views have been submitted ...Thankyou`)

    }

return(
    <>
    <div className='my-3'>
        <h1 className='text-center text-capitalize'>contact us</h1>
    </div>
    <div className='container contact_div'>
        <div className='row'>
        <div className='col-md-6 col-10 mx-auto'>
        <form class="row g-3 needs-validation" novalidate >
        <div className="mb-3">
        
  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Jatin Mishra" name='fullname' value={data.fullname}  onChange={inputEvent} required/>
</div>
        <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='email' value={data.email}  onChange={inputEvent} required/>
</div>
        <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="1234567890" name='phonenumber' value={data.phonenumber}  onChange={inputEvent} required/>
</div>
        <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Message</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="your views" name='message' value={data.message}  onChange={inputEvent} required/>
</div>
<div className="col-12">
    <div class="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label className="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit" onClick={formsubmit}>Submit form</button>
  </div>
  </form>
        </div>
        </div>
    </div>
    </>
)

}

export default Contact;
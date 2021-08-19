import React, { useState } from "react"
import FormHead from "./FormHead"

const Step1 = ({ handleChange, nextStep }) => {
  const [btnstatus, setBtnstatus] = useState(false);

  const handleSubmit = () => {
    nextStep();
  }

  const handleClick = (e) => {
    handleChange(e)   
    setBtnstatus(true)   
  }
    return (
        <div className="contaier">
          <FormHead />
          <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact">

          <p>
            <label>Name <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Email <input type="email" name="email" /></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
          <div className="row d-flex justify-content-center my-3">
              <div className="col-md-8 text-center col-sm-12">
              <h2 className="display-5 mb-6 w-100">Hey! I’m Arina, plz select the type of your business</h2> 
              </div>
          </div>  
          <div className="row d-flex justify-content-center">
              <div className="col-md-5 col-sm-9 col-xs-12">
                <div className="row">
                  <div className="col-sm-6 py-1">
                    <input type="radio" value="Sole Trader" onChange={e=>handleClick(e)} name="business"/> <label>Sole Trader</label>
                  </div>
                  <div className="col-sm-6 py-1">
                    <input type="radio" value="Ltd Company" onChange={e=>handleClick(e)} name="business"/> <label>Ltd Company</label>
                  </div>
                  <div className="col-sm-6 py-1">
                    <input type="radio" value="Partnership" onChange={e=>handleClick(e)} name="business"/> <label>Partnership</label>
                  </div>
                  <div className="col-sm-6 py-1">
                   <input type="radio" value="LLP" onChange={e=>handleClick(e)} name="business"/> <label>LLP</label>
                   
                  </div>
                  <div className="col-sm-12 py-1 d-flex justify-content-center align-items-center">
                  {btnstatus && <button onClick={handleSubmit} className="my-4 py-2 px-4 btn btn-primary text-uppercase fs-6 fw-bolder text">Next</button>}
                  </div>
                </div>
                
              </div>
          </div>       
        </div>
    )
}

export default Step1
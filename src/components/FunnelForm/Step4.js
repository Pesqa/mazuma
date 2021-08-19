import React, { useState } from "react"
import FormHead from "./FormHead"
const Step4 = ({ values, handleChange, nextStep, prevStep, restartStep }) => {
  const [btnstatus, setBtnstatus] = useState(values.vat ? true : false);

  const handleSubmit = () => {
    nextStep();
  }
  const handleSubmitBack = () => {
    prevStep();
  }

  const handleClick = (e) => {
    handleChange(e)   
    setBtnstatus(true)   
  }
  console.log('Vat value ',values.vat);

    return (
      <div className="contaier">
        <FormHead restartStep={restartStep} prevStep={prevStep} />
        <div className="row d-flex justify-content-center my-3">
              <div className="col-md-8 text-center col-sm-12">
              <h2 className="display-5 mb-6 w-100">Are you VAT registered?</h2> 
              </div>
         </div>  
         <div className="row d-flex justify-content-center">
          <div className="col-md-5 col-sm-9 col-xs-12">
              <div className="row">
                <div className="col-sm-6">
                  <input type="radio" value="1" checked = {values.vat == 1} onChange={e=>handleClick(e)} name="vat"/> Yes, I’m
                </div>
                <div className="col-sm-6">
                  <input type="radio" value="0" checked = {values.vat == 0} onChange={e=>handleClick(e)} name="vat"/> Nope!
                </div>                
              </div>
              <div className="col-sm-12 py-1 d-flex justify-content-center align-items-center">
                {/* <button onClick={restartStep} className="mx-2 my-2">Restart</button>
                <button onClick={handleSubmitBack} className="mx-2 my-2">Back</button> */}
                {btnstatus && <button onClick={handleSubmit} className="my-4 py-2 px-4 btn btn-primary text-uppercase fs-6 fw-bolder text">Next</button>}
              </div>
              
            </div>
        </div>       
      </div>
    )
}

export default Step4
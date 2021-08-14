import React, { useState } from "react"

const Step5 = ({ values, handleChange, nextStep, prevStep, restartStep }) => {
  const [btnstatus, setBtnstatus] = useState(values.payroll ? true : false);

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


    return (
      <div className="contaier">
        <div className="row d-flex justify-content-center mb-lg-2 mb-sm-5">
            <div className="col-md-8 text-center col-sm-12">
            <h2>Would you like us to run payroll for you?</h2> 
            </div>
        </div>  
        <div className="row d-flex justify-content-center">
            <div className="col-md-7 col-sm-12">
              <div className="row">
                <div className="col-sm-6">
                  <input type="radio" value="1" checked = {values.payroll == 1} onChange={e=>handleClick(e)} name="payroll"/> Yes, I’m
                </div>
                <div className="col-sm-6">
                  <input type="radio" value="0" checked = {values.payroll == 0} onChange={e=>handleClick(e)} name="payroll"/> No
                </div>                
              </div>
              <button onClick={restartStep} className="mx-2 my-2">Restart</button>
              <button onClick={handleSubmitBack} className="mx-2 my-2">Back</button>
              {btnstatus && <button onClick={handleSubmit} className="mx-2 my-2">Next</button>}
            </div>
        </div>       
      </div>
    )
}

export default Step5
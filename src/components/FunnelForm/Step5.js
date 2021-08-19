import React, { useState } from "react"
import FormHead from "./FormHead"
const Step5 = ({ values, handleChange, nextStep, prevStep, formSubmit, restartStep }) => {
  const [btnstatus, setBtnstatus] = useState(values.payroll ? true : false);
  const [payrollvalue, setPayrollvalue] = useState(values.payroll);

  const handleSubmit = () => {
    if(payrollvalue==0)
    {
      formSubmit();
    }
    else
    {
      nextStep() 
    }
  }
  const handleSubmitBack = () => {
    prevStep();
  }

  const handleClick = (e) => {
    handleChange(e)  
    setPayrollvalue(e.currentTarget.value) 
    setBtnstatus(true)   
  }


    return (
      <div className="contaier">
        <FormHead restartStep={restartStep} prevStep={prevStep} />
        <div className="row d-flex justify-content-center my-3">
              <div className="col-md-8 text-center col-sm-12">
              <h2 className="display-5 mb-6 w-100">Would you like us to run payroll for you?</h2> 
              </div>
          </div>    
          <div className="row d-flex justify-content-center">
            <div className="col-md-5 col-sm-9 col-xs-12">
              <div className="row">
                <div className="col-sm-6">
                  <input type="radio" value="1" checked = {values.payroll == 1} onChange={e=>handleClick(e)} name="payroll"/> Yes, I’m
                </div>
                <div className="col-sm-6">
                  <input type="radio" value="0" checked = {values.payroll == 0} onChange={e=>handleClick(e)} name="payroll"/> No
                </div>                
              </div>
              <div className="col-sm-12 py-1 d-flex justify-content-center align-items-center">
                {/* <button onClick={restartStep} className="mx-2 my-2">Restart</button>
                <button onClick={handleSubmitBack} className="mx-2 my-2">Back</button> */}
                {btnstatus && <button onClick={handleSubmit} className="my-4 py-2 px-4 btn btn-primary text-uppercase fs-6 fw-bolder text">{payrollvalue==0 ? 'See my price now!' : 'Next'}</button>}
              </div>
              
            </div>
        </div>       
      </div>
    )
}

export default Step5
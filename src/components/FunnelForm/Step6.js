import React, { useState } from "react"

const Step6 = ({ values, handleChange, nextStep, prevStep, restartStep, formSubmit }) => {

  const handleSubmit = () => {
    formSubmit();
  }
  const handleSubmitBack = () => {
    prevStep();
  }

  const handleClick = (e) => {
    handleChange(e)   
  }


    return (
      <div className="contaier">
        <div className="row d-flex justify-content-center mb-lg-2 mb-sm-5">
            <div className="col-md-8 text-center col-sm-12">
            <h2>How many payslips</h2> 
            </div>
        </div>  
        <div className="row d-flex justify-content-center">
            <div className="col-md-7 col-sm-12">
              <div className="row">
                <div className="col-sm-12">
                  <select name="payslips" className="w-100" onChange={handleClick}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="10">10+</option>
                    <option value="20">20+</option>
                  </select>
                </div>                             
              </div>
              <button onClick={restartStep} className="mx-2 my-2">Restart</button>
              <button onClick={handleSubmitBack} className="mx-2 my-2">Back</button>
              <button onClick={handleSubmit} className="mx-2 my-2">See my price now!</button>
            </div>
        </div>       
      </div>
    )
}

export default Step6
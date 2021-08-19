import React, { useState } from "react"

const FormHead = ({ restartStep, prevStep }) => {
    console.log('Function ',prevStep)
    const handleSubmitBack = () => {
        prevStep();
      }
    return(
        <div className="row justify-content-center text-center my-2 py-2">  
            <div className="col-md-12 col-sm-12 form-head col-xl-11 col-lg-12 col-md-12 my-3 py-1 d-flex justify-content-between align-items-center">
              <div className="bg-white text-dark round-block d-flex justify-content-start align-items-center">
                {prevStep && <button onClick={handleSubmitBack} className="bg-white border-0 text-end">Back</button>}
              </div>
             
              <div className="border border-dark rounded-circle bg-white text-dark round-block d-flex justify-content-center align-items-center"><span>Member</span></div>
              <div className="bg-white text-dark round-block d-flex justify-content-end align-items-center">
                {restartStep && <button onClick={restartStep} className="bg-white border-0 text-end">Restart</button>}
              </div>
            </div>
          </div>
    )
}

export default FormHead
import React, { useState } from "react"
import FormHead from "./FormHead"

const Step2 = ({ values, handleChange, nextStep, prevStep, restartStep }) => {
  const [btnstatus, setBtnstatus] = useState(false);
  const [company, setCompany] = useState(values.company);

  const handleSubmit = () => {
    nextStep();
  }
  const handleSubmitBack = () => {
    prevStep();
  }

  const handleChangeHanlder = (e) => {
    handleChange(e)  
    setCompany(e.target.value) 
  }
    return (
        <div className="contaier">
          <FormHead restartStep={restartStep} prevStep={prevStep} />
          <div className="row d-flex justify-content-center my-3">
              <div className="col-md-8 text-center col-sm-12">
              <h2 className="display-5 mb-6 w-100">What is the name of your company?</h2> 
              </div>
          </div>    
          <div className="row d-flex justify-content-center">
              <div className="col-md-5 col-sm-9 col-xs-12">
                <div className="row">
                  <div className="col-sm-12 mb-3">
                    <input
                      type="text"
                      placeholder="Company"
                      label="Company"
                      name="company"
                      onChange={e=>handleChangeHanlder(e)}
                      defaultValue={values.company}
                      className="w-100 py-3 px-4 mb-2 rounded-1 border border-info"
                    />
                  </div>                  
                 
                </div>
                <div className="col-sm-12 py-1 d-flex justify-content-center align-items-center">
                  {/* <button onClick={restartStep} className="mx-2 my-2">Restart</button>
                  <button onClick={handleSubmitBack} className="mx-2 my-2">Back</button> */}
                  {company!=='' && <button onClick={handleSubmit} className="my-4 py-2 px-4 btn btn-primary text-uppercase fs-6 fw-bolder text">Next</button>}
                </div>
                

              </div>
          </div>       
        </div>
    )
}

export default Step2
import React, { useState } from "react"


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
          <div className="row d-flex justify-content-center mb-lg-2 mb-sm-5">
              <div className="col-md-8 text-center col-sm-12">
              <h2>What is the name of your company?</h2> 
              </div>
          </div>  
          <div className="row d-flex justify-content-center">
              <div className="col-md-8 col-sm-12">
                <div className="row">
                  <div className="col-sm-12 mb-3">
                    <input
                      type="text"
                      placeholder="Company"
                      label="Company"
                      name="company"
                      onChange={e=>handleChangeHanlder(e)}
                      defaultValue={values.company}
                      className="form-control w-100"
                    />
                  </div>                  
                 
                </div>
                <button onClick={restartStep} className="mx-2 my-2">Restart</button>
                <button onClick={handleSubmitBack} className="mx-2 my-2">Back</button>
                {company!=='' && <button onClick={handleSubmit} className="mx-2 my-2">Next</button>}

              </div>
          </div>       
        </div>
    )
}

export default Step2
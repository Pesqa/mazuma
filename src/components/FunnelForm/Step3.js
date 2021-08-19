import React, { useState } from "react"
import FormHead from "./FormHead"

const Step3 = ({ values, handleChange, nextStep, prevStep, restartStep }) => {
 //const [btnstatus, setBtnstatus] = useState(false);
  const [firstname, setFirstname] = useState(values.firstname);
  const [lastname, setLastname] = useState(values.lastname);

  const handleSubmit = () => {
    nextStep();
  }
  const handleSubmitBack = () => {
    prevStep();
  }

  const handleChangeHanlder = (e) => {
    handleChange(e)  
    if(e.target.name==='firstname')
    {
      setFirstname(e.target.value) 
    }
    if(e.target.name==='lastname')
    {
      setLastname(e.target.value) 
    }
  }
    return (
        <div className="contaier">
          <FormHead restartStep={restartStep} prevStep={prevStep} />
          <div className="row d-flex justify-content-center my-3">
              <div className="col-md-8 text-center col-sm-12">
              <h2 className="display-5 mb-6 w-100">I’ll get you an awesome price in minutes. Ready to go?</h2> 
              </div>
          </div>  
          <div className="row d-flex justify-content-center">
              <div className="col-md-5 col-sm-9 col-xs-12">
                <div className="row">
                  <div className="col-sm-12 mb-3">
                    <input
                      type="text"
                      placeholder="First Name"
                      label="First Name"
                      name="firstname"
                      onChange={e=>handleChangeHanlder(e)}
                      defaultValue={values.firstname}
                      className="w-100 py-3 px-4 mb-2 rounded-1 border border-info"
                    />
                  </div>
                  <div className="col-sm-12 mb-3">
                  <input
                      type="text"
                      placeholder="Last Name"
                      label="Last Name"
                      name="lastname"
                      onChange={e=>handleChangeHanlder(e)}
                      defaultValue={values.lastname}
                      className="w-100 py-3 px-4 mb-2 rounded-1 border border-info"
                    />
                  </div>
                 
                </div>
                <div className="col-sm-12 py-1 d-flex justify-content-center align-items-center">
                  {/* <button onClick={restartStep} className="mx-2 my-2">Restart</button>
                  <button onClick={handleSubmitBack} className="mx-2 my-2">Back</button> */}
                  {firstname!=='' && lastname!=='' && <button onClick={handleSubmit} className="my-4 py-2 px-4 btn btn-primary text-uppercase fs-6 fw-bolder text">Next</button>}
                </div>
              </div>
          </div>       
        </div>
    )
}

export default Step3
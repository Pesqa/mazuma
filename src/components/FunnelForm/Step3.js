import React, { useState } from "react"


const Step3 = ({ values, handleChange, nextStep, prevStep, restartStep }) => {
  const [btnstatus, setBtnstatus] = useState(false);
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
          <div className="row d-flex justify-content-center mb-lg-2 mb-sm-5">
              <div className="col-md-8 text-center col-sm-12">
              <h2>I’ll get you an awesome price in minutes. Ready to go?</h2> 
              </div>
          </div>  
          <div className="row d-flex justify-content-center">
              <div className="col-md-8 col-sm-12">
                <div className="row">
                  <div className="col-sm-6 mb-3">
                    <input
                      type="text"
                      placeholder="First Name"
                      label="First Name"
                      name="firstname"
                      onChange={e=>handleChangeHanlder(e)}
                      defaultValue={values.firstname}
                      className="form-control w-100"
                    />
                  </div>
                  <div className="col-sm-6 mb-3">
                  <input
                      type="text"
                      placeholder="Last Name"
                      label="Last Name"
                      name="lastname"
                      onChange={e=>handleChangeHanlder(e)}
                      defaultValue={values.lastname}
                      className="form-control w-100"
                    />
                  </div>
                 
                </div>
                <button onClick={restartStep} className="mx-2 my-2">Restart</button>
                <button onClick={handleSubmitBack} className="mx-2 my-2">Back</button>
                {firstname!=='' && lastname!=='' && <button onClick={handleSubmit} className="mx-2 my-2">Next</button>}
              </div>
          </div>       
        </div>
    )
}

export default Step3
import React, { useState } from "react"


const Step1 = ({ values, handleChange, nextStep }) => {
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
          <div className="row d-flex justify-content-center mb-lg-2 mb-sm-5">
              <div className="col-md-8 text-center col-sm-12 border">
              <h2>Hey! I’m Arina, plz select the type of your business</h2> 
              </div>
          </div>  
          <div className="row d-flex justify-content-center">
              <div className="col-md-7 col-sm-12 border">
                <div className="row">
                  <div className="col-sm-6">
                    <input type="radio" value="Sole Trader" onChange={e=>handleClick(e)} name="business"/> Sole Trader
                  </div>
                  <div className="col-sm-6">
                    <input type="radio" value="Ltd Company" onChange={e=>handleClick(e)} name="business"/> Ltd Company
                  </div>
                  <div className="col-sm-6">
                    <input type="radio" value="Partnership" onChange={e=>handleClick(e)} name="business"/> Partnership
                  </div>
                  <div className="col-sm-6">
                   <input type="radio" value="LLP" onChange={e=>handleClick(e)} name="business"/> LLP
                  </div>
                </div>
                {btnstatus && <button onClick={handleSubmit} className="mx-2 my-2">Next</button>}
              </div>
          </div>       
        </div>
    )
}

export default Step1
import React, { useState } from "react"

const Step6 = ({ values, handleChange, prevStep, restartStep, formSubmit }) => {

  const handleSubmit = () => {
    formSubmit();
  }
  const handleSubmitBack = () => {
    prevStep();
  }

  const handleClick = (e) => {
    handleChange(e)   
  }
  const options_data = [
    { "name":"1", "value":"1" },
    { "name":"2", "value":"2" },
    { "name":"3", "value":"3" },
    { "name":"4", "value":"4" },
    { "name":"5", "value":"5" },
    { "name":"6", "value":"6" },
    { "name":"7", "value":"7" },
    { "name":"8", "value":"8" },
    { "name":"9", "value":"9" },
    { "name":"10", "value":"10" },
    { "name":"11", "value":"11" },
    { "name":"12", "value":"12" },
    { "name":"13", "value":"13" },
    { "name":"14", "value":"14" },
    { "name":"15", "value":"15" },
    { "name":"16", "value":"16" },
    { "name":"17", "value":"17" },
    { "name":"18", "value":"18" },
    { "name":"19", "value":"19" },
    { "name":"20+", "value":"20" }
  ]
  console.log('Select Value ',values.payslips);
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
                    { options_data.map((item,index)=>{
                      if(values.payslips === item.value){
                        return (<option key={index} value={item.value} selected>{item.name}</option> )  
                      }
                      else
                      {
                        return (<option key={index} value={item.value}>{item.name}</option>  ) 
                      }                                       
                      
                    }) }
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
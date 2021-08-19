import React from "react"
import Step1 from "./Step1"

const Step6 = ({ values, nextStep, prevStep, restartStep }) => {
  if(values.quote_price===0){
      return <Step1 />
  }
  const handleSubmitBack = () => {
    if(values.payroll == 1 ){
      prevStep();
    }
    else
    {
      prevStep(2); 
    }
  }
    return (
        <div className="container d-flex flex-column justify-content-center text-center">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-sm-9 col-xs-12">
        {/* <FormHead restartStep={restartStep}/> */}
        <h2 className="display-5 my-2 w-100"><span>&#163;</span>{values.quote_price}</h2>
        <h6 className="display-6 mb-5 fw-bolder">Quote Price</h6>
        <p>This quote is based upon the information that you have given us and an average number of transactions</p>
        <p className="gray">Your monthly subscription will cost, excluding VAT, this is for our basic package. We know that choosing an accountant is a big deal, so we’re offering a 10% discount if you sign up with Mazuma in July 2021! If you’d like sign up simply book a call with an advisor below. The onboarding process is quick and easy.</p>
        {/* <button onClick={handleSubmitBack} className="mx-2 my-2">Back</button> */}
        </div>
        </div>
        </div>
    )
}

export default Step6
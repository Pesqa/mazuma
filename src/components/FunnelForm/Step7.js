import React from "react"
import Step1 from "./Step1"

import { useStateValue } from '../../StateProvider'

const Step7 = ({ values, prevStep }) => {
  if(values.quote_price===0){
      return <Step1 />
  }
  const handleSubmitBack = () => {
    prevStep();
  }
    return (
        <div className="container d-flex flex-column justify-content-center text-center">
        <h2><span>&#163;</span>{values.quote_price}</h2>
        <h6>Quote Price</h6>
        <p>This quote is based upon the information that you have given us and an average number of transactions</p>
        <p className="gray">Your monthly subscription will cost, excluding VAT, this is for our basic package. We know that choosing an accountant is a big deal, so we’re offering a 10% discount if you sign up with Mazuma in July 2021! If you’d like sign up simply book a call with an advisor below. The onboarding process is quick and easy.</p>
        <button onClick={handleSubmitBack} className="mx-2 my-2">Back</button>
        </div>
    )
}

export default Step7
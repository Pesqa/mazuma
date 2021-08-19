import React, { useState, useRef } from "react"
import FormHead from "./FormHead"
const Step5 = ({ values, handleChange, nextStep, prevStep, formSubmit, restartStep }) => {
  const [btnstatus, setBtnstatus] = useState(values.payroll ? true : false);
  const [payrollvalue, setPayrollvalue] = useState(values.payroll);
  const [payslipsvalue, setPayslipsvalue] = useState(values.payslips);
  const elementRef = useRef(0);
  const { firstname, lastname, business, company, vat, payroll, payslips, quote_price } = values
  const bprice = [
    {"name":"Sole Trader","price": "28"},
    {"name":"Partnership","price": "60"},
    {"name":"LLP","price": "75"},
    {"name":"Ltd Company","price": "85"}
  ]
  const calculateQuote = (payroll, payslips)=>{
    const selected_business = bprice.filter((item)=>item.name===business)
    const selected_business_price = selected_business ? selected_business[0].price : 0
    const selected_vat_price = vat == 1 ? 15 : 0
    let selected_payslips_price = 0
    if(payroll == 1 ){
      selected_payslips_price = payslips<=5 ? 10 : parseInt(payslips) * 2                 
    }
    const quote_price_value = parseInt(selected_business_price) + parseInt(selected_vat_price) + parseInt(selected_payslips_price)
    elementRef.current.value = quote_price_value;
  }
  const handleSubmit = () => {    
      formSubmit();
  }
  const handleSubmitBack = () => {
    prevStep();
  }
  const handleSelectChange = (e) => {
    handleChange(e)
    setPayslipsvalue(e.target.value)
    calculateQuote(payrollvalue, e.target.value)
  }
  const handleClick = (e) => {
    handleChange(e)  
    setPayrollvalue(e.currentTarget.value) 
    setBtnstatus(true)  
    calculateQuote(e.currentTarget.value, payslipsvalue) 
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
    return (
      <div className="contaier">
        <FormHead restartStep={restartStep} prevStep={prevStep} />
        <div className="row d-flex justify-content-center my-3">
              <div className="col-md-8 text-center col-sm-12">
              <h2 className="display-5 mb-6 w-100">Would you like us to run payroll for you?</h2> 
              </div>
          </div>    
          <div className="row d-flex justify-content-center">
          <div className="col-md-5 col-sm-9 col-xs-12">
          <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact"/>          
          <input type="text" name="business" value={values.business}/>
          <input type="text" name="company" value={values.company}/>
          <input type="text" name="name" value={values.firstname}/>
          <input type="text" name="lastname" value={values.lastname}/>
          <input type="text" name="vat" value={values.vat ==1 ? 'Yes' : 'No'}/>
          <input type="text" name="payroll" value={values.payroll==1 ? 'Yes' : 'No'}/>
          <input type="text" name="payslips" value={values.payslips}/>
          <input type="text" name="quote_price" value={values.quote_price} ref={elementRef}/>
            
              <div className="row">
                <div className="col-sm-6">
                  <input type="radio" value="1" checked = {values.payroll == 1} onChange={e=>handleClick(e)} name="payroll"/> Yes, I’m
                </div>
                <div className="col-sm-6">
                  <input type="radio" value="0" checked = {values.payroll == 0} onChange={e=>handleClick(e)} name="payroll"/> No
                </div>                
              </div>
              {btnstatus &&  payrollvalue == 1 && (
                  <div className="row d-flex justify-content-center my-3">
                  <div className="col-md-8 text-center col-sm-12">
                   <h3 className="display-6 mb-6 w-100">How many payslips?</h3> 
                  </div>
                  <div className="col-sm-12">               
                    <select name="payslips" className="w-100 py-3 px-4 mb-2 rounded-1 border border-info" onChange={handleSelectChange}>
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
               )}
              <div className="col-sm-12 py-1 d-flex justify-content-center align-items-center">
                {btnstatus && <button type="submit" className="my-4 py-2 px-4 btn btn-primary text-uppercase fs-6 fw-bolder text">See my price now!</button>}
                <button type="submit">Send</button>
              </div>
              
            
            </form>
            </div>
        </div>       
      </div>
    )
}

export default Step5
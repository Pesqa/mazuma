import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'
import { connect } from 'react-redux';
import { Encrypt } from '../../utils/functions'

import FormHead from '../../components/FormHead'
import Layout from "../../components/common/layout"

const Step4 = ({step, business, company, email, firstname, lastname, vat, payroll, payslips, quoteprice, dispatch}) => {
    const [btnstatus, setBtnstatus] = useState(vat ? true : false);
    const [equote, setEquote] = useState(0);
    useEffect(() => {
      if(step==1){
        navigate('/get-a-quote/1');
      }
      else
      {
        if(step<5){
          navigate('/get-a-quote/4');
        }
      }      
    }, [step]); 
    const submitHandler = ()=>{
      
    }
    const handleClick = (e) => {    
        dispatch({
            type: 'ADD_PAYROLL',
            payload: e.currentTarget.value,
        });   
        calculateQuote(e.currentTarget.value, payslips)   
        setBtnstatus(true)   
    }
    const handleSelectChange = (e) => {
        dispatch({
            type: 'ADD_PAYSLIPS',
            payload: e.target.value
        });  
        calculateQuote(payroll, e.target.value)  
    }
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
      dispatch({
        type: 'ADD_QUOTE_PRICE',
        payload: quote_price_value
      });  
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
    return(
        <Layout>
          <div className="container overflow-hidden form-container">
              <div className="row">
                <div className="col-sm-12">
                  <FormHead />
                </div>
              </div>
          <div className="row d-flex justify-content-center">
              <div className="col-md-8 col-sm-10 text-center">
              <h2 className="form-sub-heading display-5 mb-3 w-100">Would you like us to run payroll for you?</h2> 
              </div>
          </div>    
          <div className="row d-flex justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-9 col-xs-12">     
          <form name="quoteform" method="POST" data-netlify="true" action={ `/get-a-quote/success?v=${quoteprice}&email=${email}&fname=${firstname}&lname=${lastname}` } onSubmit={submitHandler}>
          <input type="hidden" name="form-name" value="quoteform"/>    
          <input type="hidden" name="name" value={firstname}/>
          <input type="hidden" name="lastname" value={lastname}/>    
          <input type="hidden" name="email" value={email}/>               
          <input type="hidden" name="business" value={business}/>
          <input type="hidden" name="company" value={company}/>          
          <input type="hidden" name="vat" value={vat ==1 ? 'Yes' : 'No'}/>
          <input type="hidden" name="payroll" value={payroll == 1 ? 'Yes' : 'No'}/>
          <input type="hidden" name="payslips" value={payslips}/>
          <input type="hidden" name="quote_price" value={quoteprice}/>
            
          <div className="row customradiobtn">
                <div className="col-md-6 col-xs-6 py-md-1">
                      <label className="d-flex justify-content-center">
                      <input type="radio" value="1" checked = {payroll == 1} onChange={e=>handleClick(e)} name="payroll"/>
                          <span>Yes</span>
                      </label>
                </div>
                <div className="col-md-6 col-xs-6 py-md-1">
                      <label className="d-flex justify-content-center">
                      <input type="radio" value="0" checked = {payroll == 0} onChange={e=>handleClick(e)} name="payroll"/>
                          <span>No</span>
                      </label>
                </div>                
              </div>
              {btnstatus &&  payroll == 1 && (
                  <div className="row d-flex justify-content-center mt-md-3 mt-sm-1">
                  <div className="col-md-8 text-center col-sm-12">
                   <h3 className="display-6 mb-1 w-100">How many payslips?</h3> 
                  </div>
                  <div className="col-sm-12">               
                    <select name="payslips" className="w-100 py-2 px-3 mb-2 rounded-1 border border-info" onChange={handleSelectChange}>
                      { options_data.map((item,index)=>{
                        if(payslips == item.value){
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
                {btnstatus && <button type="submit" className="my-2 py-2 px-4 btn btn-primary text-uppercase fs-6 fw-bolder text">See my price now!</button>}
              </div>
              
            
            </form>
            </div>
        </div>       
      </div>
        </Layout>        
    )
}

const mapStateToProps = state => {
    return {
        step: state.app.step,
        business: state.app.business,
        company: state.app.company,
        email: state.app.email,
        firstname: state.app.firstname,
        lastname: state.app.lastname,
        vat: state.app.vat,
        payroll: state.app.payroll,
        payslips: state.app.payslips,
        quoteprice: state.app.quoteprice
    };
};
export default connect(mapStateToProps)(Step4);
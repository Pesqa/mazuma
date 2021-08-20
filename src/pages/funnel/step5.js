import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'
import { connect } from 'react-redux';
import { Encrypt } from '../../utils/functions'

import FormHead from '../../components/FormHead'
import Layout from "../../components/common/layout"

const Step4 = ({step, business, company, firstname, lastname, vat, payroll, payslips, quoteprice, dispatch}) => {
    const [btnstatus, setBtnstatus] = useState(vat ? true : false);
    const [equote, setEquote] = useState(0);
    // useEffect(() => {
    //   if(step==1){
    //     navigate('/funnel');
    //   }
    //   else
    //   {
    //     if(step<5){
    //       navigate('/funnel/step4');
    //     }
    //   }      
    // }, [step]); 
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
          <div className="container overflow-hidden my-5 pt-5">
              <div className="row">
                <div className="col-sm-12">
                  <FormHead />
                </div>
              </div>
          <div className="row d-flex justify-content-center my-3">
              <div className="col-md-7 col-sm-12 text-center col-sm-12">
                <h2 className="display-5 mb-6 w-100">Would you like us to run payroll for you?</h2> 
              </div>
          </div>    
          <div className="row d-flex justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-9 col-xs-12">     
          <form name="quoteform" method="POST" data-netlify="true" action={ `/funnel/thankyou?v=${quoteprice}` } onSubmit={submitHandler}>
          <input type="hidden" name="form-name" value="quoteform"/>    
          <input type="hidden" name="name" value={firstname}/>
          <input type="hidden" name="lastname" value={lastname}/>                
          <input type="hidden" name="business" value={business}/>
          <input type="hidden" name="company" value={company}/>          
          <input type="hidden" name="vat" value={vat ==1 ? 'Yes' : 'No'}/>
          <input type="hidden" name="payroll" value={payroll == 1 ? 'Yes' : 'No'}/>
          <input type="hidden" name="payslips" value={payslips}/>
          <input type="hidden" name="quote_price" value={quoteprice}/>
            
              <div className="row">
                <div className="col-sm-6 d-flex justify-content-center">
                  <input type="radio" value="1" checked = {payroll == 1} onChange={e=>handleClick(e)} name="payroll"/>&nbsp;<label className="align-middle lh-base">Yes, I’m</label>
                </div>
                <div className="col-sm-6 d-flex justify-content-center">
                  <input type="radio" value="0" checked = {payroll == 0} onChange={e=>handleClick(e)} name="payroll"/>&nbsp;<label className="align-middle lh-base">No</label>
                </div>                
              </div>
              {btnstatus &&  payroll == 1 && (
                  <div className="row d-flex justify-content-center mt-5">
                  <div className="col-md-8 text-center col-sm-12">
                   <h3 className="display-6 mb-1 w-100">How many payslips?</h3> 
                  </div>
                  <div className="col-sm-12">               
                    <select name="payslips" className="w-100 py-3 px-4 mb-2 rounded-1 border border-info" onChange={handleSelectChange}>
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
                {btnstatus && <button type="submit" className="my-4 py-2 px-4 btn btn-primary text-uppercase fs-6 fw-bolder text">See my price now!</button>}
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
        firstname: state.app.firstname,
        lastname: state.app.lastname,
        vat: state.app.vat,
        payroll: state.app.payroll,
        payslips: state.app.payslips,
        quoteprice: state.app.quoteprice
    };
};
export default connect(mapStateToProps)(Step4);
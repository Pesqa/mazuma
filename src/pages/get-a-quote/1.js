import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { connect } from 'react-redux';

import FormHead from '../../components/FormHead'
import Layout from "../../components/common/layout"


const Step1 = ({step, business, dispatch}) => {
    const [btnstatus, setBtnstatus] = useState(false);
    const handleSubmit = () => {
        dispatch({
            type: 'NEXT_STEP',
            payload: 1,
        });
        return navigate('/get-a-quote/2')
      }
    const handleClick = (e) => { 
        dispatch({
            type: 'ADD_BUSINESS',
            payload: e.currentTarget.value,
        });       
        setBtnstatus(true)   
    }
    return (
        <Layout>          
            <div className="container overflow-hidden form-container">
              <div className="row">
                <div className="col-sm-12">
                  <FormHead />
                </div>
              </div>
            
          
          <div className="row d-flex justify-content-center">
              <div className="col-md-8 col-sm-10 text-center">
              <h2 className="form-sub-heading display-5 mb-3 w-100">Hey! I’m Daniel, plz select the type of your business</h2> 
              </div>
          </div>  
          <div className="row d-flex justify-content-center">
              <div className="col-lg-6 col-md-7 col-sm-9 col-xs-12">
                <div className="row customradiobtn first-level">
                  <div className="col-md-6 col-xs-6 py-md-1">
                    <label>
                    <input type="radio" value="Sole Trader" onChange={e=>handleClick(e)} name="business"/>
                      <span>Sole Trader</span>
                    </label>
                  </div>
                  <div className="col-md-6 col-xs-6 py-md-1">
                    <label>
                    <input type="radio" value="Ltd Company" onChange={e=>handleClick(e)} name="business"/>
                      <span>Ltd Company</span>
                    </label>
                  </div>
                  <div className="col-md-6 col-xs-6 py-md-1">
                  <label>
                  <input type="radio" value="Partnership" onChange={e=>handleClick(e)} name="business"/>
                      <span>Partnership</span>
                    </label>
                  </div>
                  <div className="col-md-6 col-xs-6 py-md-1">
                    <label>
                    <input type="radio" value="LLP" onChange={e=>handleClick(e)} name="business"/>
                        <span>LLP</span>
                      </label>
                   
                  </div>
                  <div className="col-sm-12 py-1 d-flex justify-content-center align-items-center">
                  {btnstatus && <button onClick={handleSubmit} className="my-4 py-2 px-5 btn btn-primary text-uppercase fs-6 fw-bolder text">Next</button>}
                  </div>
                </div>                
              </div>
          </div>       
        </div>
        </Layout>
    )
}
const mapStateToProps = state => {
    return {
        step: state.app.step,
        business: state.app.business
    };
};
export default connect(mapStateToProps)(Step1);

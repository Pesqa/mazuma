import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'
import { connect } from 'react-redux';

import Layout from "../../components/common/layout"

const Step2 = ({step, business, company, dispatch}) => {
     const handleSubmit = () => {
        dispatch({
            type: 'NEXT_STEP',
            payload: 1,
        });
        alert(company)
        return navigate('/funnel/step3')
      }
    
      const handleChangeHanlder = (e) => {
        dispatch({
            type: 'ADD_COMPANY',
            payload: e.target.value,
        });       
      }
    return(
        <Layout>
            <div className="contaier">
            {/* <FormHead restartStep={restartStep} prevStep={prevStep} /> */}
            <div className="row d-flex justify-content-center my-3">
                <div className="col-md-8 text-center col-sm-12">
                <h2 className="display-5 mb-6 w-100">What is the name of your company?</h2> 
                </div>
            </div>    
            <div className="row d-flex justify-content-center">
                <div className="col-md-5 col-sm-9 col-xs-12">
                    <div className="row">
                    <div className="col-sm-12 mb-3">
                        <input
                        type="text"
                        placeholder="Company"
                        label="Company"
                        name="company"
                        onChange={e=>handleChangeHanlder(e)}
                        defaultValue={company}
                        className="w-100 py-3 px-4 mb-2 rounded-1 border border-info"
                        />
                    </div>                  
                    
                    </div>
                    <div className="col-sm-12 py-1 d-flex justify-content-center align-items-center">
                    {/* <button onClick={restartStep} className="mx-2 my-2">Restart</button>
                    <button onClick={handleSubmitBack} className="mx-2 my-2">Back</button> */}
                    {company!=='' && <button onClick={handleSubmit} className="my-4 py-2 px-4 btn btn-primary text-uppercase fs-6 fw-bolder text">Next</button>}
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
        business: state.app.business,
        company: state.app.company
    };
};
export default connect(mapStateToProps)(Step2);
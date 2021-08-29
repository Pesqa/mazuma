import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import { connect } from 'react-redux';

import FormHead from '../../components/FormHead'
import Layout from "../../components/common/layout"

const Step2 = ({step, business, company, dispatch}) => {
      useEffect(() => {
        if(step<2){
            navigate('/get-a-quote/1');
        }
      }, [step]);
     const handleSubmit = () => {
        dispatch({
            type: 'NEXT_STEP',
            payload: 1,
        });
        return navigate('/get-a-quote/3')
      }
    
      const handleChangeHanlder = (e) => {
        dispatch({
            type: 'ADD_COMPANY',
            payload: e.target.value,
        });       
      }
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
                <h2 className="form-sub-heading display-5 mb-3 w-100">What is the name of your company?</h2> 
                </div>
            </div>    
            <div className="row d-flex justify-content-center">
                <div className="col-md-5 col-sm-9 col-xs-10">
                    <div className="row">
                    <div className="col-sm-12 mb-3">
                        <input
                        type="text"
                        placeholder="Company"
                        label="Company"
                        name="company"
                        onChange={e=>handleChangeHanlder(e)}
                        defaultValue={company}
                        className="w-100 py-2 px-3 mb-1 rounded-1 border border-info"
                        />
                    </div>                  
                    
                    </div>
                    <div className="col-sm-12 py-1 d-flex justify-content-center align-items-center">
                    {/* <button onClick={restartStep} className="mx-2 my-2">Restart</button>
                    <button onClick={handleSubmitBack} className="mx-2 my-2">Back</button> */}
                    {company!=='' && <button onClick={handleSubmit} className="my-2 py-2 px-4 btn btn-primary text-uppercase fs-6 fw-bolder text">Next</button>}
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
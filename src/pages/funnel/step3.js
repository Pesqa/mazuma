import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'
import { connect } from 'react-redux';
import FormHead from '../../components/FormHead'
import Layout from "../../components/common/layout"

const Step3 = ({step, business, company, firstname, lastname, dispatch}) => {
    useEffect(() => {
        if(step<3){
            navigate('/funnel/step2');
        }
      }, [step]);
     const handleSubmit = () => {
        dispatch({
            type: 'NEXT_STEP',
            payload: 1,
        });
        return navigate('/funnel/step4')
      }
    
      const handleChangeHanlder = (e) => {
        const action_name = e.target.name ==='firstname' ? 'ADD_FIRSTNAME' : 'ADD_LASTNAME'
        dispatch({
            type: action_name,
            payload: e.target.value,
        });       
      }
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
                    <h2 className="display-5 mb-6 w-100">I’ll get you an awesome price in minutes. Ready to go?</h2> 
                    </div>
                </div>  
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5 col-sm-9 col-xs-12">
                        <div className="row">
                        <div className="col-sm-12 mb-3">
                            <input
                            type="text"
                            placeholder="First Name"
                            label="First Name"
                            name="firstname"
                            onChange={e=>handleChangeHanlder(e)}
                            defaultValue={firstname}
                            className="w-100 py-3 px-4 mb-2 rounded-1 border border-info"
                            />
                        </div>
                        <div className="col-sm-12 mb-3">
                        <input
                            type="text"
                            placeholder="Last Name"
                            label="Last Name"
                            name="lastname"
                            onChange={e=>handleChangeHanlder(e)}
                            defaultValue={lastname}
                            className="w-100 py-3 px-4 mb-2 rounded-1 border border-info"
                            />
                        </div>
                        
                        </div>
                        <div className="col-sm-12 py-1 d-flex justify-content-center align-items-center">
                        {/* <button onClick={restartStep} className="mx-2 my-2">Restart</button>
                        <button onClick={handleSubmitBack} className="mx-2 my-2">Back</button> */}
                        {firstname!=='' && lastname!=='' && <button onClick={handleSubmit} className="my-4 py-2 px-4 btn btn-primary text-uppercase fs-6 fw-bolder text">Next</button>}
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
        company: state.app.company,
        firstname: state.app.firstname,
        lastname: state.app.lastname
    };
};
export default connect(mapStateToProps)(Step3);
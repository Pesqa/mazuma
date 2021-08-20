import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'
import { connect } from 'react-redux';

import Layout from "../../components/common/layout"

const Step4 = ({step, business, company, firstname, lastname, vat, dispatch}) => {
    const [btnstatus, setBtnstatus] = useState(vat ? true : false);
    const handleSubmit = () => {
        dispatch({
            type: 'NEXT_STEP',
            payload: 1,
        });
        alert(company)
        alert(firstname)
        alert(lastname)
        alert(vat)
        return navigate('/funnel/step5')
      }
    const handleClick = (e) => { 
        dispatch({
            type: 'ADD_VAT',
            payload: e.currentTarget.value,
        });       
        setBtnstatus(true)   
    }
    return(
        <Layout>
            <div className="contaier mb-5">
                {/* <FormHead restartStep={restartStep} prevStep={prevStep} /> */}
                <div className="row d-flex justify-content-center my-3">
                    <div className="col-md-8 text-center col-sm-12">
                    <h2 className="display-5 mb-6 w-100">Are you VAT registered?</h2> 
                    </div>
                </div>  
                <div className="row d-flex justify-content-center">
                <div className="col-md-5 col-sm-9 col-xs-12">
                    <div className="row">
                        <div className="col-sm-6">
                        <input type="radio" value="1" checked = {vat == 1} onChange={e=>handleClick(e)} name="vat"/> Yes, I’m
                        </div>
                        <div className="col-sm-6">
                        <input type="radio" value="0" checked = {vat == 0} onChange={e=>handleClick(e)} name="vat"/> Nope!
                        </div>                
                    </div>
                    <div className="col-sm-12 py-1 d-flex justify-content-center align-items-center">
                        {btnstatus && <button onClick={handleSubmit} className="my-4 py-2 px-4 btn btn-primary text-uppercase fs-6 fw-bolder text">Next</button>}
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
        lastname: state.app.lastname,
        vat: state.app.vat
    };
};
export default connect(mapStateToProps)(Step4);
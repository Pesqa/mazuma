import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';

import Layout from "../../components/common/layout"

const Thankyou = ({step, business, company, dispatch}) => {
    return(
        <Layout>
            <div className="contaier">
            {/* <FormHead restartStep={restartStep} prevStep={prevStep} /> */}
                <div className="row d-flex justify-content-center my-3">
                    <div className="col-md-8 text-center col-sm-12">
                    <h2 className="display-5 mb-6 w-100">Thank you</h2> 
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
export default connect(mapStateToProps)(Thankyou);
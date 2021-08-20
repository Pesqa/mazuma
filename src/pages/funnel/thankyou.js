import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'
import { connect } from 'react-redux';

import Layout from "../../components/common/layout"

const Thankyou = ({step, business, company, firstname, lastname, vat, payroll, payslips, quoteprice, dispatch}) => {
    const [rerender, setRerender] = useState(); // or any state
    const [afterRender, setAfterRender] = useState();// internal state

    useEffect(() => {
        if(quoteprice==0){
            navigate('/funnel');
        }
        if (!afterRender) return;
        if(afterRender){
            //alert(afterRender);
        }
        //setAfterRender(false);
     }, [afterRender]);

     useEffect(() => {
        setAfterRender(true);
     }, [rerender]);
     
    return(
        <Layout>
            <div className="container d-flex flex-column justify-content-center text-center">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 col-sm-9 col-xs-12">            
                        <h2 className="display-5 my-2 w-100"><span>&#163;</span>{quoteprice}</h2>
                        <h6 className="display-6 mb-5 fw-bolder">Quote Price</h6>
                        <p>This quote is based upon the information that you have given us and an average number of transactions</p>
                        <p className="gray">Your monthly subscription will cost, excluding VAT, this is for our basic package. We know that choosing an accountant is a big deal, so we’re offering a 10% discount if you sign up with Mazuma in July 2021! If you’d like sign up simply book a call with an advisor below. The onboarding process is quick and easy.</p>                        
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
export default connect(mapStateToProps)(Thankyou);
import React, { useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import { connect } from 'react-redux';
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Layout from "../../components/common/layout"

const Success = (props) => {
    const params = new URLSearchParams(props.location.search);
    const quoteprice = params.get("v");
    const email = params.get("email");
    const firstname = params.get("fname");
    const lastname = params.get("lname");
    useEffect(() => {
        setTimeout(() => {
            addToMailchimp(email,{ FNAME : firstname, LNAME : lastname})
            .then(data => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
            props.dispatch({
                type: 'RESET'
            });
            navigate('https://calendly.com/ogray-2/30min');
        }, 3000);
     });

     
    return(
        <Layout>
            <form>   
            <input type="hidden" name="EMAIL" value={email}/>   
            <input type="hidden" name="FNAME" value={firstname}/>
            <input type="hidden" name="LNAME" value={lastname}/>           
            <div className="container d-flex flex-column justify-content-center text-center">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 col-sm-9 col-xs-12">            
                        <h2 className="display-5 my-2 w-100"><span>&#163;</span>{quoteprice}</h2>
                        <h6 className="display-6 mb-5 fw-bolder">Quote Price</h6>
                        <p>This quote is based upon the information that you have given us and an average number of transactions</p>
                        <p className="gray">Your monthly subscription will cost, excluding VAT, this is for our basic package. If you’d like sign up simply book a call with an advisor below. The onboarding process is quick and easy.</p>                        
                    </div>
                </div>
            </div>
            </form>
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
export default connect(mapStateToProps)(Success);
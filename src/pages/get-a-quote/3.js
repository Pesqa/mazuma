import React, { useEffect,useState } from 'react'
import { navigate } from 'gatsby'
import { connect } from 'react-redux';
import FormHead from '../../components/FormHead'
import Layout from "../../components/common/layout"

const Step3 = ({step, business, company, email, firstname, lastname, dispatch}) => {
    const [errors, setErrors] = useState('');
    const [formIsValid, setFormIsValid] = useState(false)
    useEffect(() => {
        if(step<3){
            navigate('/get-a-quote/2');
        }
      }, [step]);
     const handleSubmit = () => {
        dispatch({
            type: 'NEXT_STEP',
            payload: 1,
        });
        return navigate('/get-a-quote/4')
      }
    
      const handleChangeHanlder = (e,setFormIsValid,setErrors) => {
        let action_name = ''
        if (e.target.name==='email'){
            action_name = 'ADD_EMAIL'
            let pattern = new RegExp(/^(('[\w-\s]+')|([\w-]+(?:\.[\w-]+)*)|('[\w-\s]+')([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(e.target.value)) {
                setFormIsValid(false)
                setErrors('*Please enter valid email')
                //alert(errors)
            }
            else
            {
                setFormIsValid(true)
                setErrors(null)   
            }
            
        } else if (e.target.name==='firstname'){
            action_name = 'ADD_FIRSTNAME'
        } else if (e.target.name==='lastname'){
            action_name = 'ADD_LASTNAME'
        }
        dispatch({
            type: action_name,
            payload: e.target.value,
        });      
        console.log('Level Email', email) 
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
                    <h2 className="form-sub-heading display-5 mb-3 w-100">I’ll get you an awesome price in minutes. Ready to go?</h2> 
                    </div>
                </div>  
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5 col-sm-9 col-xs-12">
                        <div className="row">
                        <div className="col-sm-12 mb-3">
                            <input
                            type="text"
                            placeholder="Email Address"
                            label="Email Address"
                            name="email"
                            onChange={e=>handleChangeHanlder(e,setFormIsValid,setErrors)}
                            defaultValue={email}
                            className="w-100 py-2 px-3 mb-1 rounded-1 border border-info"
                            />
                            { errors && <span className="w-100 text-danger-text">{errors}</span>}
                        </div>
                        <div className="col-sm-12 mb-3">
                            <input
                            type="text"
                            placeholder="First Name"
                            label="First Name"
                            name="firstname"
                            onChange={e=>handleChangeHanlder(e)}
                            defaultValue={firstname}
                            className="w-100 py-2 px-3 mb-1 rounded-1 border border-info"
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
                            className="w-100 py-2 px-3 mb-1 rounded-1 border border-info"
                            />
                        </div>
                        
                        </div>
                        <div className="col-sm-12 py-1 d-flex justify-content-center align-items-center">
                        {formIsValid && email!=='' && firstname!=='' && lastname!=='' && <button onClick={handleSubmit} className="my-2 py-2 px-4 btn btn-primary text-uppercase fs-6 fw-bolder text">Next</button>}
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
        email: state.app.email,
        firstname: state.app.firstname,
        lastname: state.app.lastname
    };
};
export default connect(mapStateToProps)(Step3);
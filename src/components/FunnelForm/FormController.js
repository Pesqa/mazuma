import React, { Component } from 'react';
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Step4 from "./Step4"
import Step5 from "./Step5"
import Step6 from "./Step6"
import Step7 from "./Step7"

export class FormController extends Component{  
    state = {
        step: 1,        
        business: '',
        company:'',
        firstname: '',
        lastname: '',
        vat: 0,
        payroll: 0,
        payslips: 0,
        quote_price: 0
      };    
    
    render(){        
        const { step } = this.state;
        const { firstname, lastname, business, company, vat, payroll, payslips, quote_price } = this.state;
        const values = { firstname, lastname, business, company, vat, payroll, payslips, quote_price };
        console.log('Total Quote Price ', values.quote_price)
        const bprice = [
            {"name":"Sole Trader","price": "28"},
            {"name":"Partnership","price": "60"},
            {"name":"LLP","price": "75"},
            {"name":"Ltd Company","price": "85"}
        ]
        
        
        console.log('Business Name', quote_price)
        const formSubmit = () => {
            const selected_business = bprice.filter((item)=>item.name===business)
            const selected_business_price = selected_business ? selected_business[0].price : 0
            const selected_vat_price = vat === 1 ? 15 : 0
            const selected_payroll_price = payroll === 1 ? 10 : 0
            const selected_payslips_price = payslips !==0 ? payslips * 2 : 0
            const quote_price_value = parseInt(selected_business_price) + parseInt(selected_vat_price) + parseInt(selected_payroll_price) + parseInt(selected_payslips_price)
            this.setState({ quote_price : quote_price_value })
            const { step } = this.state;
            this.setState({
              step: step + 1
            });
        }
        const restartStep = () => {
            const { step } = this.state;
            this.setState({
                step: 1,        
                business: '',
                company:'',
                firstname: '',
                lastname: '',
                vat: 0,
                payroll: 0,
                payslips: 0,
                quote_price: 0
            });
          };
        
          const nextStep = () => {            
            const { step } = this.state;
            this.setState({
              step: step + 1
            });
          };
        
          const prevStep = () => {
            const { step } = this.state;
            this.setState({
              step: step - 1
            });
          };
          
          const handleRadioChange = e => {
              alert(e.currentTarget.value)
            this.setState({ [e.target.name] : e.currentTarget.value });
          };
          const handleChange =  e => {
            this.setState({ [e.target.name]: e.target.value });
          };
          switch (step) {
            case 1:
                return (
                    <Step1
                        nextStep={nextStep}
                        handleChange={handleRadioChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <Step2
                        nextStep={nextStep}
                        prevStep={prevStep}
                        restartStep={restartStep}
                        handleChange={handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <Step3
                        nextStep={nextStep}
                        prevStep={prevStep}
                        restartStep={restartStep}
                        handleChange={handleChange}
                        values={values}
                    />
                )
            case 4:
                return (
                    <Step4
                        nextStep={nextStep}
                        prevStep={prevStep}
                        restartStep={restartStep}
                        handleChange={handleRadioChange}
                        values={values}
                    />
                )
            case 5:
                return (
                    <Step5
                        nextStep={nextStep}
                        prevStep={prevStep}
                        restartStep={restartStep}
                        handleChange={handleRadioChange}
                        values={values}
                    />
                )
            case 6:
                return (
                    <Step6
                        nextStep={nextStep}
                        prevStep={prevStep}
                        restartStep={restartStep}
                        handleChange={handleChange}
                        formSubmit={formSubmit}
                        values={values}
                    />
                )
            case 7:
                return (
                    <Step7
                        prevStep={prevStep}
                        values={values}
                    />
                )
                default:
                    (console.log('This is a multi-step form built with React.'))   
        }
    }

}
export default FormController
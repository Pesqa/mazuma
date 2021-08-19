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
        vat: null,
        payroll: null,
        payslips: 0,
        quote_price: 0
      };    
    
    render(){        
        const { step } = this.state;
        const { firstname, lastname, business, company, vat, payroll, payslips, quote_price } = this.state;
        const values = { firstname, lastname, business, company, vat, payroll, payslips, quote_price };
        const bprice = [
            {"name":"Sole Trader","price": "28"},
            {"name":"Partnership","price": "60"},
            {"name":"LLP","price": "75"},
            {"name":"Ltd Company","price": "85"}
        ]
        const encode = (data) => {
            return Object.keys(data)
                .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
                .join("&")
          }
        const formSubmit = (e) => {
            const selected_business = bprice.filter((item)=>item.name===business)
            const selected_business_price = selected_business ? selected_business[0].price : 0
            const selected_vat_price = vat == 1 ? 15 : 0
            let selected_payslips_price = 0
            if(payroll == 1 ){
                selected_payslips_price = payslips<=5 ? 10 : parseInt(payslips) * 2                 
            }
            const quote_price_value = parseInt(selected_business_price) + parseInt(selected_vat_price) + parseInt(selected_payslips_price)
            this.setState({ quote_price : quote_price_value })
            e.preventDefault()
            let myForm = document.getElementById('priceQuoteForm');
            let formData = new FormData(myForm)
            fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            }).then(() => console.log('Form successfully submitted')).catch((error) =>
                alert(error))        
        }
        
        const restartStep = () => {
            const { step } = this.state;
            this.setState({
                step: 1,        
                business: '',
                company:'',
                firstname: '',
                lastname: '',
                vat: null,
                payroll: null,
                payslips: 0,
                quote_price: 0
            });
          };
        
          const nextStep = (num=1) => {            
            const { step } = this.state;
            this.setState({
              step: step + num
            });
          };
          const prevStep = (num=1) => {
            const { step } = this.state;
            this.setState({
              step: step - num
            });
          };
          
          const handleRadioChange = e => {              
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
                        formSubmit={formSubmit}
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
                        nextStep={nextStep}
                        prevStep={prevStep}
                        restartStep={restartStep}
                        values={values}
                    />
                )
                default:
                    (console.log('This is a multi-step form built with React.'))   
        }
    }

}
export default FormController
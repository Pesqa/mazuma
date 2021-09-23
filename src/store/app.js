const initialState = {
    step: 1,
    business: '',
    company:'',
    email : '',
    firstname: '',
    lastname: '',
    vat: null,
    payroll: null,
    payslips: 0,
    quoteprice: 0
  };
  
  const NEXT_STEP = 'NEXT_STEP';
  const PREV_STEP = 'PREV_STEP';
  const ADD_BUSINESS = 'ADD_BUSINESS';
  const ADD_COMPANY = 'ADD_COMPANY';
  const ADD_EMAIL = 'ADD_EMAIL';
  const ADD_FIRSTNAME = 'ADD_FIRSTNAME';
  const ADD_LASTNAME = 'ADD_LASTNAME';
  const ADD_VAT = 'ADD_VAT';
  const ADD_PAYROLL = 'ADD_PAYROLL';
  const ADD_PAYSLIPS = 'ADD_PAYSLIPS';
  const ADD_QUOTE_PRICE = 'ADD_QUOTE_PRICE';

  export const stepNextStep = num => ({ type: NEXT_STEP, payload: num });
  export const stepPrevStep = num => ({ type: PREV_STEP, payload: num });
  export const addBusiness = input => ({ type: ADD_BUSINESS, payload: input });
  export const addCompany = input => ({ type: ADD_COMPANY, payload: input });
  export const addEmail = input => ({ type: ADD_EMAIL, payload: input });
  export const addFirstname = input => ({ type: ADD_FIRSTNAME, payload: input });
  export const addLastname = input => ({ type: ADD_LASTNAME, payload: input });

  export const addVat = num => ({ type: ADD_VAT, payload: num });
  export const addPayroll = num => ({ type: ADD_PAYROLL, payload: num });
  export const addPayslips = num => ({ type: ADD_PAYSLIPS, payload: num });
  export const addQuoteprice = num => ({ type: ADD_QUOTE_PRICE, payload: num });
  
  export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'NEXT_STEP':
                return {
                    ...state,
                    step: state.step + payload
                } 
        case 'PREV_STEP':
                return {
                    ...state,
                    step: state.step - payload
                } 
        case 'ADD_BUSINESS':
            return {
                ...state,
                business: payload
            } 
        case 'ADD_COMPANY':
            return {
                ...state,
                company: payload
            } 
        case 'ADD_EMAIL':
            return {
                ...state,
                email: payload
            } 
        case 'ADD_FIRSTNAME':
            return {
                ...state,
                firstname: payload
            } 
        case 'ADD_LASTNAME':
            return {
                ...state,
                lastname: payload
            } 
        case 'ADD_VAT':
            return {
                ...state,
                vat: payload
            } 
        case 'ADD_PAYROLL':
            return {
                ...state,
                payroll: payload
            } 
        case 'ADD_PAYSLIPS':
            return {
                ...state,
                payslips: payload
            } 
        case 'ADD_QUOTE_PRICE':
            return {
                ...state,
                quoteprice: payload
            } 
        case 'RESET':
            return {
                ...state,
                step: 1,
                business: '',
                company:'',
                email: '',
                firstname: '',
                lastname: '',
                vat: null,
                payroll: null,
                payslips: 0,
                quoteprice: 0
            }
        default:
            return state;
    }
  };
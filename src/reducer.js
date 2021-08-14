export const initialState = {
    stepOne: '',
    stepTwo: '',
    stepThree: '',
    stepFour: '',
    stepFive: '',
    stepSix: '',
    stepSeven: ''
};

const reducer = (state, action) => {
    switch (action.type) {       
        case 'ADD_STEP_ONE':
            return {
                ...state,
                stepOne: action.item
            }
        case 'ADD_STEP_TWO':
            return {
                ...state,
                stepTwo: action.item
            }
        case 'ADD_STEP_THREE':
            return {
                ...state,
                stepThree: action.item
            }
        case 'RESET':
            return {
                ...state,
                stepTwo: '',
                stepThree: '',
                stepFour: '',
                stepFive: '',
                stepSix: '',
                stepSeven: '',
            }
        default:
            return state;
    }
}

export default reducer;
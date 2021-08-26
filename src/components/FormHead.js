import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { connect } from 'react-redux';
// import FHeadImg from "../assets/images/form-head-bg2.png"
// import ArinaPic from "../assets/images/arina-pic.png"
const FormHead = ({step, dispatch }) => {
    const handleSubmitBack = () => {
      dispatch({
        type: 'PREV_STEP',
        payload: 1,
      });
    }
    const handleSubmitRestart = () => {
      dispatch({
        type: 'RESET'
      });
    }
    return(
        <div className="row justify-content-center text-center my-3 py-1 px-2"> 
            <div className="form-head col-md-12 col-sm-12 col-xl-11 col-lg-12 col-md-12 d-flex justify-content-between m-0 p-0">
                <div className="bg-white text-dark round-block d-flex justify-content-start align-items-center m-0 p-0">
                {step != 1 && <button onClick={handleSubmitBack} className="bg-white border-0 text-end">Back</button>}
                </div>
                <div className="border border-dark rounded-circle bg-white text-dark round-block d-flex justify-content-center align-items-center">
                <StaticImage src="../assets/images/arina-pic.png" alt="Arina Pic" className="w-100"/>
                </div>
                <div className="bg-white text-dark round-block d-flex justify-content-end align-items-center m-0 p-0">
                {step != 1 && <button onClick={handleSubmitRestart} className="bg-white border-0 text-end">Restart</button>}
                </div>
            </div> 
          </div>
    )
}
const mapStateToProps = state => {
  return {
      step: state.app.step
  };
};
export default connect(mapStateToProps)(FormHead);
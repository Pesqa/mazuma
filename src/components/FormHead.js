import React, { useState } from "react"
import styled from 'styled-components'
import { connect } from 'react-redux';
import FHeadImg from "../assets/images/form-head-bg2.png"
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
        <div className="row justify-content-center text-center my-3 py-1 px-0"> 
            <div className="form-head col-md-12 col-sm-12 col-xl-11 col-lg-12 col-md-12 d-flex justify-content-between m-0 p-0">
                <div className="bg-white text-dark round-block d-flex justify-content-start align-items-center m-0 p-0">
                {step != 1 && <button onClick={handleSubmitBack} className="bg-white border-0 text-end">Back</button>}
                </div>
                <div className="border border-dark rounded-circle bg-white text-dark round-block d-flex justify-content-center align-items-center"><span>Member</span></div>
                <div className="bg-white text-dark round-block d-flex justify-content-end align-items-center m-0 p-0">
                {step != 1 && <button onClick={handleSubmitRestart} className="bg-white border-0 text-end">Restart</button>}
                </div>
            </div> 
            {/* <div img={FHeadImg} className="form-head col-md-12 col-sm-12 col-xl-11 col-lg-12 col-md-12 my-2 d-flex justify-content-between align-items-center border2">
              <div className="bg-white text-dark round-block d-flex justify-content-start align-items-center p-0 m-0">
                {step != 1 && <button onClick={handleSubmitBack} className="bg-white border-0 text-end">Back</button>}
              </div>
             
              <div className="border border-dark rounded-circle bg-white text-dark round-block d-flex justify-content-center align-items-center"><span>Member</span></div>
              <div className="bg-white text-dark round-block d-flex justify-content-end align-items-center">
              {step != 1 && <button onClick={handleSubmitRestart} className="bg-white border-0 text-end">Restart</button>}
              </div>
            </div> */}
          </div>
    )
}
const HeadForm = styled.div`
  background-image: url(${props => props.img}) !important;
  /* background-repeat:no-repeat;
  background-size: 100% auto;
  background-position: center center; */
  border:2px soild blue !important;
`
const mapStateToProps = state => {
  return {
      step: state.app.step
  };
};
export default connect(mapStateToProps)(FormHead);
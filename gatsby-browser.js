import React from "react";
import Layout from "./src/layout/Layout";
import './src/layout/custom.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
};

// export const wrapRootElement = ({ element }) => (
//     <Layout>{element}</Layout>
// );

export { default as wrapRootElement } from './src/store/reduxWrapper';

import React from "react";
import Layout from "./src/layout/Layout";
import './src/layout/custom.scss'

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
};

export const wrapRootElement = ({ element }) => (
    <Layout>{element}</Layout>
);

import React, { useEffect, useState } from "react"
import { useStateValue } from '../StateProvider'

import Layout from "../components/layout"

import FormController from "../components/FunnelForm/FormController"

const Funnel = () => {
    return (
        <Layout>
            <FormController/> 
        </Layout>
    )
}

export default Funnel

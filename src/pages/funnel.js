import React, { useEffect, useState } from "react"

import Layout from "../components/common/layout"

import FormController from "../components/FunnelForm/FormController"

const Funnel = () => {
    return (
        <Layout>
            <div class="w-100 py-5 my-5">
                <div class="container">                    
                    <FormController/> 
                </div>
            </div>
        </Layout>
    )
}

export default Funnel

import React from 'react'

import RequestCard from "../../components/card/request"
import "../index.css"

import SAMPLE_REQUESTS from "../../constants/sampleRequests"

const Requests = () => {

    return (
        <div className="page-background">
            <div className="large-header">
                <h1>Requests</h1>
            </div>
            <div className="content-background">
                <div className="content">
                    {SAMPLE_REQUESTS.map((request) => <RequestCard {...request} /> )}
                </div>
            </div>
        </div>
    )
}

export default Requests

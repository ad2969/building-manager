import React, { useState } from 'react'
import { Link, useParams } from "react-router-dom";

import { Empty, Slider } from 'antd';
import {
    CloseOutlined,
    ExclamationCircleOutlined
} from "@ant-design/icons"
import "../index.css"

import REQUEST_PROGRESS from "../../constants/requestProgress"

const RequestDetails = () => {

    const [requests, setRequests] = useState([]);

    if (!requests.length) {
        fetch('http://localhost:3001/db/maintenance')
        .then(response => response.json())
        .then(rows => {
            console.log(rows);
            setRequests(rows);
        })
        .catch(console.log);
    }

    const { slug } = useParams();
    const currentRequest = requests.find((request) => request.slug === slug)
    const currentProgress = (currentRequest && currentRequest.progress) || "NOT_STARTED"

    const completionMarks = {
        0: currentRequest ? new Date(currentRequest.submissionDate).toLocaleDateString() : "",
        100: currentRequest ? new Date(currentRequest.completionDate).toLocaleDateString() : ""
    }
    let currentCompletionStatus = 0
    if(currentProgress === "COMPLETED") currentCompletionStatus = 100
    else if(currentRequest) currentCompletionStatus = (new Date() - new Date(currentRequest.submissionDate)) / (new Date(currentRequest.completionDate) - new Date(currentRequest.submissionDate)) * 100

    return (
        <div className="page-background">
            <div className="detail-header request" style={{ background: REQUEST_PROGRESS[currentProgress].primaryColor }}>
                <img src={currentRequest.imageUrl} alt="request-detail"/>
                <Link className="detail-header__close-button" to="/requests"><CloseOutlined /></Link>
            </div>
            {currentRequest ? <div className="content-background detail" style={{ background: "transparent" }}>
                <div className="content detail">
                    <div className="request-content-detail__date">Posted {currentRequest.date}</div>
                    <div className="request-content-detail__title">{currentRequest.title}</div>
                    <div className="request-content-detail__progress">
                        <span style={{ background: REQUEST_PROGRESS[currentProgress].secondaryColor }}>{REQUEST_PROGRESS[currentProgress].label}</span>
                    </div>
                    <Slider defaultValue={currentCompletionStatus} marks={completionMarks} disabled={true} />

                    <br /><hr /><br />

                    <h2>Details</h2>
                    <div className="request-content-detail__images">
                        <img src={currentRequest.imageUrl} alt="request-desc"/>
                    </div>
                    <div>
                        <ExclamationCircleOutlined style={{ color: REQUEST_PROGRESS[currentProgress].primaryColor }}/>
                        &nbsp; Submitted: {currentRequest.submissionDate}
                    </div>
                    <div>
                        <ExclamationCircleOutlined style={{ color: REQUEST_PROGRESS[currentProgress].primaryColor }}/>
                        &nbsp; Estimated Completion: {currentRequest.completionDate}
                    </div>
                    <div>
                        <ExclamationCircleOutlined style={{ color: REQUEST_PROGRESS[currentProgress].primaryColor }}/>
                        &nbsp; Managed by: {currentRequest.manager}
                    </div>
                </div>
            </div> : <Empty />}
        </div>
    )
}

export default RequestDetails

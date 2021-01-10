import React from 'react'
import { Link } from "react-router-dom";

import RequestCard from "../../components/card/request"
import { PlusCircleFilled } from "@ant-design/icons"
import { Tabs } from 'antd';
import "../index.css"

import SAMPLE_REQUESTS from "../../constants/sampleRequests"

const { TabPane } = Tabs;

const Requests = () => {

    const completedRequests = [];
    const incompletedRequests = [];

    SAMPLE_REQUESTS.forEach((request) => {
        if(new Date(request.completionDate) <= new Date()) completedRequests.push(request)
        else incompletedRequests.push(request)
    })

    return (
        <div className="page-background">
            <div className="large-header">
                <h1>Requests</h1>
            </div>
            <div className="content-background">
                <div className="content">
                <Tabs defaultActiveKey="1" centered>
                    <TabPane tab="Current" key="1">
                        {incompletedRequests.map((request) => <RequestCard {...request} /> )}
                    </TabPane>
                    <TabPane tab="Past" key="2">
                        {completedRequests.map((request) => <RequestCard {...request} /> )}
                    </TabPane>
                </Tabs>
                </div>
            </div>
            <Link className="add-button" to="/requests/create"><PlusCircleFilled /></Link>
        </div>
    )
}

export default Requests

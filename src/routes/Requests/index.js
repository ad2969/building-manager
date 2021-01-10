import React from 'react'

import RequestCard from "../../components/card/request"
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
        </div>
    )
}

export default Requests

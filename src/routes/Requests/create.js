import React from 'react'
import { Link } from "react-router-dom";

import { LeftOutlined } from "@ant-design/icons"
import "../index.css"

const RequestCreate = () => {

    return (
        <div className="page-background">
            <div className="content-background none">
                <div className="content">
                    <div className="create-buttons">
                        <Link to="/requests" className="create-buttons__back-button"><LeftOutlined /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestCreate

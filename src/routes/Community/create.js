import React from 'react'
import { Link } from "react-router-dom";

import { Input } from 'antd';
import { CloseOutlined, FileImageFilled, VideoCameraFilled } from "@ant-design/icons"
import Uploads from "../../assets/uploads.png"
import "../index.css"

const CommunityCreate = () => {

    return (
        <div className="page-background">
            <div className="small-header"></div>
            <div className="content-background detail">
                <div className="content">
                    <div className="create-buttons">
                        <Link to="/community" className="create-buttons__back-button"><CloseOutlined /></Link>
                        <Link to="/community" className="create-buttons__button">Post</Link>
                    </div>
                    <br />
                    <div className="community-create-author">
                        <span className="community-create-author__avatar"></span>
                        <span className="community-create-author__text">Natalie Lee</span>
                    </div>
                    <Input placeholder="What would you like to share?" bordered={false} className="community-create-input" />
                    <img src={Uploads} alt="uploads" className="community-create__upload-img"/>
                    <hr />
                    <div className="community-create__upload-buttons">
                        <FileImageFilled />
                        <VideoCameraFilled />
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default CommunityCreate

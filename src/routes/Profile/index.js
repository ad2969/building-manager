import React from 'react'

import "../index.css"
import "./index.css"

const Profile = () => {

    return (
        <div className="page-background">
            <div className="large-header">
                <h1>Profile</h1>
            </div>
            <div className="content-background">
                <div className="content">
                    <div className="profile-information">
                        <span className="profile-information__avatar"></span>
                        <div className="profile-information__text">
                            <h1>Natalie Lee</h1>
                            <p>Unit 6</p>
                        </div>
                    </div>
                    <div className="profile-buttons">
                        <div className="profile-buttons__button">Edit personal information</div>
                        <hr />
                        <div className="profile-buttons__button">Notification settings</div>
                        <hr />
                        <div className="profile-buttons__button">Safety centre</div>
                        <hr />
                        <div className="profile-buttons__button">Terms of service</div>
                        <hr />
                        <div className="profile-buttons__button logout">Log out</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile

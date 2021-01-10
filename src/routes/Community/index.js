import React from 'react'

import { FilterOutlined, SearchOutlined } from "@ant-design/icons"
import CommunityCard from "../../components/card/community"
import "../index.css"

import SAMPLE_COMMUNITY_POSTS from "../../constants/sampleCommunityPosts"

const Community = () => {

    return (
        <div className="page-background">
            <div className="large-header">
                <h1>Community</h1>
                <SearchOutlined />
                <FilterOutlined />
            </div>
            <div className="content-background">
                <div className="content">
                    {SAMPLE_COMMUNITY_POSTS.map((post) => <><CommunityCard {...post} /><hr /></> )}
                </div>
            </div>
        </div>
    )
}

export default Community

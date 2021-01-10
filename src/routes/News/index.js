import React from 'react'

import { FilterOutlined, SearchOutlined } from "@ant-design/icons"
import NewsCard from "../../components/card/news"
import "../index.css"

import SAMPLE_NEWS from "../../constants/sampleNews"

const News = () => {

    return (
        <div className="page-background">
            <div className="large-header">
                <h1>News</h1>
                <SearchOutlined />
                <FilterOutlined />
            </div>
            <div className="content-background">
                <div className="content">
                    {SAMPLE_NEWS.map((news) => <NewsCard {...news} /> )}
                </div>
            </div>
        </div>
    )
}

export default News

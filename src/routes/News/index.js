import React, { useState } from 'react'

import { FilterOutlined, SearchOutlined } from "@ant-design/icons"
import NewsCard from "../../components/card/news"
import "../index.css"

const News = () => {

    const [news, setNews] = useState([]);

    if (!news.length) {
        fetch('http://localhost:3001/db/news')
        .then(response => response.json())
        .then(rows => {
            console.log(rows);
            setNews(rows);
        })
        .catch(console.log);
    }

    return (
        <div className="page-background">
            <div className="large-header">
                <h1>News</h1>
                <SearchOutlined />
                <FilterOutlined />
            </div>
            <div className="content-background">
                <div className="content">
                    {news.map((news) => <NewsCard {...news} /> )}
                </div>
            </div>
        </div>
    )
}

export default News

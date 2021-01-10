import React, { useState } from 'react'
import { Link, useParams } from "react-router-dom";

import { Empty } from 'antd';
import {
    CloseOutlined,
    ExclamationCircleOutlined
} from "@ant-design/icons"
import NewsIcon from "../../assets/news-icon.png"
import "../index.css"

import NEWS_CATEGORIES from "../../constants/newsCategories"

const NewsDetails = () => {

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

    const { slug } = useParams();
    const currentNews = news.find((news) => news.slug === slug)
    const currentCategory = (currentNews && currentNews.category) || "GENERAL_NOTICE"

    return (
        <div className="page-background">
            <div className="detail-header" style={{ background: NEWS_CATEGORIES[currentCategory].primaryColor }}>
                <img src={NewsIcon} alt="news-detail"/>
                <Link className="detail-header__close-button" to="/news"><CloseOutlined /></Link>
            </div>
            {currentNews ? <div className="content-background detail" style={{ background: NEWS_CATEGORIES[currentCategory].primaryColor }}>
                <div className="content detail">
                    <div className="news-content-detail__date">Posted {currentNews.date}</div>
                    <div className="news-content-detail__title">{currentNews.title}</div>
                    <div className="news-content-detail__category">
                        <span style={{ background: NEWS_CATEGORIES[currentCategory].secondaryColor }}>{NEWS_CATEGORIES[currentCategory].label}</span>
                    </div>

                    <br /><hr /><br />

                    <h2>Summary</h2>
                    {currentNews.summary.map((summary) =>
                        <div>
                            <ExclamationCircleOutlined style={{ color: NEWS_CATEGORIES[currentCategory].primaryColor }}/>
                            &nbsp; {summary}
                        </div>
                    )}

                    <br /><hr /><br />

                    <h2>Detailed Notes</h2>
                    <div>{currentNews.notes}</div>
                </div>
            </div> : <Empty />}
        </div>
    )
}

export default NewsDetails

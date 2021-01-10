import React from 'react'
import { Link, useParams } from "react-router-dom";

import { Empty } from 'antd';
import {
    CloseOutlined,
    ExclamationCircleOutlined
} from "@ant-design/icons"
import NewsIcon from "../../assets/news-icon.png"
import "../index.css"
import "./index.css"

import SAMPLE_NEWS from "../../constants/sampleNews"
import NEWS_CATEGORIES from "../../constants/newsCategories"

const NewsDetails = () => {

    const { slug } = useParams();
    const currentNews = SAMPLE_NEWS.find((news) => news.slug === slug)
    const currentCategory = (currentNews && currentNews.category) || "GENERAL_NOTICE"

    return (
        <div className="page-background">
            <div className="detail-header" style={{ background: NEWS_CATEGORIES[currentCategory].primaryColor }}>
                <img src={NewsIcon} alt="news-detail"/>
                <Link className="detail-header__close-button" to="/news"><CloseOutlined /></Link>
            </div>
            {currentNews ? <div className="content-background detail" style={{ background: NEWS_CATEGORIES[currentCategory].primaryColor }}>
                <div className="content detail">
                    <div className="content-detail__date">Posted {currentNews.date}</div>
                    <div className="content-detail__title">{currentNews.title}</div>
                    <div className="content-detail__category">
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

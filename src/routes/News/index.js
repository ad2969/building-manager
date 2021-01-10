import React from 'react'

import { FilterOutlined, SearchOutlined } from "@ant-design/icons"
import Card from "../../components/card"
import "../index.css"

import SAMPLE_DATA from "../../constants/sampleData"

const News = () => {

    const favoritedNews = []
    const otherNews = []

    SAMPLE_DATA.forEach((data) => {
        if(data.favorited) favoritedNews.push(data)
        else otherNews.push(data)
    })

    return (
        <div>
            <div class="large-header">
                <h1>News</h1>
                <SearchOutlined />
                <FilterOutlined />
            </div>
            <div class="content">
                <h2>Favourite News</h2>
                {favoritedNews.map((data) => <Card {...data} /> )}

                <br />

                <h2>Jan 2021</h2>
                {otherNews.map((data) => <Card {...data} /> )}
            </div>
        </div>
    )
}

export default News

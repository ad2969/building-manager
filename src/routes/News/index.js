import React from 'react'

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
                <h2>News</h2>
            </div>
            <div class="content">
                <h1>Favourite News</h1>
                {favoritedNews.map((data) => <Card {...data} /> )}

                <br />

                <h1>Jan 2021</h1>
                {otherNews.map((data) => <Card {...data} /> )}
            </div>
        </div>
    )
}

export default News

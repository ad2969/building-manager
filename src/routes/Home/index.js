import React from 'react'
import { Link } from "react-router-dom";

import Card from "../../components/card"
import "../index.css"

import SAMPLE_DATA from "../../constants/sampleData"

const Home = () => {

    const newData = SAMPLE_DATA.filter((data) => data.isNew)

    return (
        <div>
            <div class="header">
                <h2>Hello, Natalie Lee</h2>
                <div>Today is {new Date().toDateString()}</div>
            </div>
            <div class="content">
                <div className="content-header">
                    <h1>Latest News</h1>
                    <Link to="/news">See all</Link>
                </div>
                {newData.map((data) => <Card {...data} /> )}
            </div>
        </div>
    )
}

export default Home

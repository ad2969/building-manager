import React from 'react'

import Card from "../../components/card"
import "./index.css"

const SAMPLE_DATA = [
    {
        category: "Maintenance",
        title: "Fire & Safety Repairs",
        date: "2hr ago",
        imageUrl: "https://firefighting-images.scdn1.secure.raxcdn.com/news/920/fire-safety-precautions-in-building-920.jpg"
    }
]

const Home = () => {
    return (
        <div>
            <div class="header">
                <h2>Hello, Natalie Lee</h2>
                <div>Today is {new Date().toDateString()}</div>
            </div>
            <div class="content">
                <h1>Latest News</h1>
                {SAMPLE_DATA.map((data) => <Card
                    category={data.category}
                    title={data.title}
                    date={data.date}
                    imageUrl={data.imageUrl}
                /> )}
            </div>
        </div>
    )
}

export default Home

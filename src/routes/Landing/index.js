import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"

import Cassa from "../../assets/cassa.png"
import "./index.css"

function Landing() {

    const history = useHistory()
    const [mounted, setMounted] = useState(false)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {

        setTimeout(() => {
            setMounted(true)
        }, 1000)

        setTimeout(() => {
            setLoaded(true)
        }, 3000)
        
        setTimeout(() => {
            history.push('/news')
        }, 6000)
    }, [])

    return (
        <div className={loaded ? "landing-splash inactive" : "landing-splash"}>
            <div className={mounted ? "landing-text active" : "landing-text"}>
                <img src={Cassa} alt="cassa" />
                <h1>cassa</h1>
            </div>
        </div>
    )
}

export default Landing

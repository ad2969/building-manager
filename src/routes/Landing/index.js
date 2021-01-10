import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"

import "./index.css"

function Landing() {

    const history = useHistory()
    const [mounted, setMounted] = useState(false)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {

        setMounted(true)
        setTimeout(() => {
            setLoaded(true)
        }, 3000)
        
        setTimeout(() => {
            history.push('/news')
        }, 5000)
    }, [])

    return (
        <div className={loaded ? "landing-splash inactive" : "landing-splash"}>
            <h1 className={mounted ? "active" : ""}>hōm</h1>
        </div>
    )
}

export default Landing

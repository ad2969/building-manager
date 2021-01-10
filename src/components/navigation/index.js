import React from 'react'
import { Link, useLocation } from "react-router-dom";

import {
    FlagFilled,
    HomeFilled,
    ReadFilled,
    ScheduleFilled,
    UserOutlined
} from "@ant-design/icons"
import "./index.css"

const NAVIGATION_ROUTES = [
    {
        title: "Home",
        icon: <HomeFilled />,
        route: '/home',
    },
    {
        title: "News",
        icon: <ReadFilled />,
        route: '/news',
    },
    {
        title: "Bookings",
        icon: <ScheduleFilled />,
        route: '/bookings',
    },
    {
        title: "Requests",
        icon: <FlagFilled />,
        route: '/requests',
    },
    {
        title: "Profile",
        icon: <UserOutlined />,
        route: '/profile',
    },
]

const Navigation = ({isSignedIn}) => {

    const location = useLocation();

    if (!isSignedIn) {
        return (null);
    }

    return (
        <div className="navigation">
            {NAVIGATION_ROUTES.map((route) => <Link
                className={`navigation-route ${location.pathname.includes(route.route) ? "active" : ""}`}
                to={route.route}
                key={route.route}
            >
                <div className="navigation-route__icon">{route.icon}</div>
                <div className="navigation-route__title">{route.title}</div>
            </Link>)}
        </div>
    )
}

export default Navigation

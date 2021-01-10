import React from 'react'
import { Link, useLocation } from "react-router-dom";

import {
    CarryOutOutlined,
    CommentOutlined,
    HomeOutlined,
    UserOutlined
} from "@ant-design/icons"
import "./index.css"

const NAVIGATION_ROUTES = [
    {
        title: "News",
        icon: <HomeOutlined />,
        route: '/news',
    },
    {
        title: "Community",
        icon: <CommentOutlined />,
        route: '/community',
    },
    {
        title: "Requests",
        icon: <CarryOutOutlined />,
        route: '/requests',
    },
    {
        title: "Profile",
        icon: <UserOutlined />,
        route: '/profile',
    },
]

const Navigation = () => {

    const location = useLocation();

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

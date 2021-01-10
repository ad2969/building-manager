import React, { useState } from "react";
import { useHistory } from "react-router-dom"

import { HeartFilled, HeartOutlined } from "@ant-design/icons"
import "./index.css";

const colorRandomizer = () => {
    const RANDOM_COLORS = ['red', 'blue', 'purple', 'green']
    const randNum = Math.floor((Math.random() * 4));
    return RANDOM_COLORS[randNum]
}

const textColor = colorRandomizer()

const RequestCard = (props) => {

  const {
    slug,
    category = '',
    title,
    date = '',
    imageUrl,
    isNew = false,
    likeable = true,
    favorited = false
  } = props;

  const history = useHistory()
  const [liked, setLiked] = useState(favorited)

  const redirectToNews = () => {
    history.push(`/news/${slug}`)
  }

  return (
    <div className="card">
      <div className="card-photo" onClick={redirectToNews}>
        <img src={imageUrl} alt={`card-${title}`} />
      </div>
      {likeable && <div className="card-like" onClick={() => setLiked(!liked)}>
          {liked ?  <HeartFilled style={{ color: "red" }} /> : <HeartOutlined />}
      </div>}
      <div className="card-description">
        <div className="card-description__text">
            <div className="card-description__text-category" style={{ color: textColor }}>{category}</div>
            <div className="card-description__text-title">{title}</div>
        </div>
        <div className="card-description__date">
            {isNew && <span className="card-description__new-tag">New</span>}
            {date}
        </div>
      </div>
    </div>
  );
};

export default RequestCard;

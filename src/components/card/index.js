import React, { useState } from "react";

import { HeartFilled, HeartOutlined } from "@ant-design/icons"
import "./index.css";

const colorRandomizer = () => {
    const RANDOM_COLORS = ['red', 'blue', 'purple', 'green']
    const randNum = Math.floor((Math.random() * 4));
    return RANDOM_COLORS[randNum]
}

const textColor = colorRandomizer()

const Card = (props) => {

  const {
    category,
    title,
    date,
    imageUrl,
  } = props;

  const [liked, setLiked] = useState(false)

  return (
    <div className="card">
      <div className="card-photo">
        <img src={imageUrl} alt={`card-${title}`} />
      </div>
      <div className="card-like" onClick={() => setLiked(!liked)}>
          {liked ?  <HeartFilled style={{ color: "red" }} /> : <HeartOutlined />}
      </div>
      <div className="card-description">
        <div className="card-description__text">
            <div className="card-description__text-category" style={{ color: textColor }}>{category}</div>
            <div className="card-description__text-title">{title}</div>
        </div>
        <div className="card-description__date">{date}</div>
      </div>
    </div>
  );
};

export default Card;

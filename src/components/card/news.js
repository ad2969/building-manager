import React from "react";
import { useHistory } from "react-router-dom"

import NEWS_CATEGORIES from "../../constants/newsCategories"
import NewsIcon from "../../assets/news-icon.png"
import "./index.css";

const NewsCard = (props) => {

  const {
    slug,
    category,
    title,
    date
  } = props;

  const history = useHistory()

  const redirectToNews = () => {
    history.push(`/news/${slug}`)
  }

  const currentCategory = NEWS_CATEGORIES[category]

  return (
    <div className="news-card" onClick={redirectToNews}>
      <img className="news-card-icon" src={NewsIcon} alt={`card-${slug}`} />
      <div className="news-card-description">
        <div className="news-card-description__date">Posted {date}</div>
        <div className="news-card-description__title">{title}</div>
        <div className="news-card-description__category">
            <span style={{ background: currentCategory.secondaryColor }}>{currentCategory.label}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

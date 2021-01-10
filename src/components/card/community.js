import React from "react";

import "./index.css";

const CommunityCard = (props) => {

  const {
    author,
    title,
    description,
    imageUrl,
    avatarUrl
  } = props;

  return (
    <div className="community-card">
      <div className="community-card-author">
        <img src={avatarUrl} alt={`card-${author}`} />
        <span>{author}</span>
      </div>
      <h2 className="community-card-title">{title}</h2>
      <p className="community-card-description">{description}</p>
      <img className="community-card-image" src={imageUrl} alt={`card-img-${title}`} />
    </div>
  );
};

export default CommunityCard;

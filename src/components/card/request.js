import React from "react";
import { useHistory } from "react-router-dom"

import REQUEST_PROGRESS from "../../constants/requestProgress"
import "./index.css";

const RequestCard = (props) => {

  const {
    slug,
    progress,
    title,
    submissionDate,
    completionDate,
    manager,
    imageUrl,
  } = props;

  const history = useHistory()

  const redirectToNews = () => {
    history.push(`/requests/${slug}`)
  }

  const currentProgress = REQUEST_PROGRESS[progress]

  return (
    <div className="request-card">
      <div className="request-card-photo" onClick={redirectToNews}>
        <img src={imageUrl} alt={`request-card-${title}`} />
      </div>
      <div className="request-card-description">
        <div className="request-card-description__text">
          <div className="request-card-description__text-date">Completion: {completionDate}</div>
          <div className="request-card-description__text-title">{title}</div>
        </div>
        <div className="request-card-description__progress">
          <span style={{ background: currentProgress.secondaryColor }}>{currentProgress.label}</span>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;

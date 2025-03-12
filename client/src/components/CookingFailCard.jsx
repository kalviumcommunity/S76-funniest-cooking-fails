import React from 'react';
import PropTypes from 'prop-types';
import './CookingFailCard.css';

const CookingFailCard = ({ 
  title, 
  description, 
  username, 
  date, 
  imageUrl, 
  likes, 
  comments 
}) => {
  return (
    <div className="cooking-fail-card">
      <div className="cooking-fail-image">
        {imageUrl ? (
          <img src={imageUrl} alt={title} />
        ) : (
          <div className="image-placeholder">No Image Available</div>
        )}
      </div>
      
      <div className="cooking-fail-content">
        <h3 className="cooking-fail-title">{title}</h3>
        <p className="cooking-fail-description">{description}</p>
        
        <div className="cooking-fail-meta">
          <div className="cooking-fail-user">
            <span className="username">@{username}</span>
            <span className="date">{new Date(date).toLocaleDateString()}</span>
          </div>
          
          <div className="cooking-fail-stats">
            <div className="stat">
              <span className="stat-icon">❤️</span>
              <span className="stat-count">{likes}</span>
            </div>
            <div className="stat">
              <span className="stat-icon">💬</span>
              <span className="stat-count">{comments}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CookingFailCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired
};

CookingFailCard.defaultProps = {
  imageUrl: '',
  likes: 0,
  comments: 0
};

export default CookingFailCard;
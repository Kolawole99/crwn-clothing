import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, subTitle, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">{subTitle}</span>
      </div>
    </div>
  );
};

export default MenuItem;

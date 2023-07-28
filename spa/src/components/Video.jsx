import React from "react";

import "./Video.css";

const Video = (props) => {
  const { url, title, category, thumbnail } = props;

  return (
    <div className="card video" data-testid="video-card">
      <video
        controls
        src={url}
        preload="none"
        poster={thumbnail}
        title={title}
        className="video-player"
      />

      <div className="font-bold text-xl mb-2">{title}</div>
      <span className="float-right inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        {category}
      </span>
    </div>
  );
};

export default Video;

import React from 'react';
import VideoThumbnail from '../VideoThumbnail/VideoThumbnail.js';
import './VideoGroup.css';

export default function VideoGroup({ title, videos, className }) {
  return (
    <div className={`video-group ${className && className}`}>
      <h2 className='video-group__title'>{title}</h2>
      <ul className='video-group__grid'>
        {videos.map((video, index) => {
          return (
            <li key={index}>
              <VideoThumbnail video={video} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

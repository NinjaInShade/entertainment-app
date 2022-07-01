import React from 'react';
import VideoThumbnail from '../VideoThumbnail/VideoThumbnail.js';
import './video-group.css';

export default function VideoGroup({ title, videos }) {
  console.log(videos);

  return (
    <div>
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

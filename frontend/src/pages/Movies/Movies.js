import React from 'react';
import VideoGroup from '../../components/VideoGroup/VideoGroup.js';

export default function Movies({ title, videos }) {
  return (
    <VideoGroup
      title={title}
      videos={videos.filter((video) => video.category.toLowerCase() === 'movie')}
    />
  );
}

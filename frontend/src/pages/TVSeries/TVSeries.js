import React from 'react';
import VideoGroup from '../../components/VideoGroup/VideoGroup.js';

export default function TVSeries({ title, videos }) {
  return (
    <VideoGroup
      title={title}
      videos={videos.filter((video) => video.category.toLowerCase() === 'tv series')}
    />
  );
}
